# require "mini_magick"

class PlacesController < ApplicationController
    def index 
        query = params.except(:controller,:action,:place)
        
    if query.keys.length == 0
       normilize_array = Place.all.map {|place| PlaceSerializer.new(place) }
    else
        # binding.pry
        places = Place.joins(:activities,:address,:schedule,:category)
        query.each{|key, val| places = places.send("where", "#{key} like ?", "%#{val}%")}
        # binding.pry
        normilize_array = places.map{|place| PlaceSerializer.new(place) } 
        
    end
      city =  query["city"].split("_").join(" ") if query["city"]
       result =  city ? {places: normilize_array, city: city} :  {places: normilize_array}
        render json: result
    end

    def show 
        disabled_days = []
        place = Place.find(params.permit(:id)[:id])
        # binding.pry
        dates = place.bookings.map{|booking| booking.date}
        dates.each do |date|
            total = 0
            place.bookings.select do|e| 
                if(e.date == date)
                    total += e.duration
                end
            end
            # this is the format needed for the date picker March 1, 2020
            disabled_days << date.strftime("%B %d, %Y")  if total >= 20.0
        end
        render json: {place: place, address: place.address, disabled_days: disabled_days, rule: place.rule, schedule: place.schedule, amenities: place.amenities, parking: place.parking, cancelation: place.cancelation_policy}
    end

    def book
        ###################################################################################################
        # THIS IS ALL THE DATA NEEDED FOR THE CREATTION OF A BOOKING REQUEST
        place_id = params.require('place').permit('id')[:id]
        user_id = params.permit('user_id')[:user_id]
        date = params.permit('date')[:date]
        start_time = params.permit('start_time')[:start_time]
        end_time = params.permit('end_time')[:end_time]
        place = Place.find(place_id)
        user = User.find(user_id)
        duration = (Time.parse(end_time) - Time.parse(start_time) ) / 3600
        price = place.price * duration
        process_fee = price * 0.08
        ####################################################################################################
        if  place.check_availability(date,start_time,end_time)
            new_booking = Booking.create({place_id: place_id, user_id: user_id, date: date, start_time: start_time, end_time: end_time, process_fee: process_fee,duration: duration,price: price})
            place.bookings << new_booking if new_booking
            user.bookings << new_booking if new_booking
            message = new_booking ? ['succes']: new_booking.errors.full_messages
        else
            message = ['The time selected is not available']
        end
        render json: {booked: !!new_booking, message: message,booking_id: (new_booking ? new_booking.id : nil)}

    end

    def create 
        # binding.pry

        user = User.find( params.permit(:user_id)[:user_id] )
       images = params.require(:images)
       place = user.places.create(place_params)

        category = Category.find_or_create_by(title: category_params[:title])
        category.places << place
        if place
            images.each do |el| 
                image = Image.new(file: el,place: place)

                if image.file.attached? 
                    image.url = url_for(image.file)
                    place.images << image if image.save
                end

            end

            params.require(:activities).each do |e| 
                activity = Activity.find_or_create_by(title: e) 
                place.activities << activity
            end

            place.schedule = Schedule.create!(schedule_params);cancelation_policy =  CancelationPolicy.find_by(genre: policy_params[:genre]); cancelation_policy.places << place;
            place.parking= Parking.create!(parking_params); place.address = Address.create!(address_params); place.rule = Rule.create!(rules_params)

            amenity_params.each do |amenity| 
                found_amenity =  Amenity.find_or_create_by(title: amenity); 
                place.amenities << found_amenity
            end
        end
        render json: {places: PlaceSerializer.new(user.places.sort_by(&:created_at)) } 
    end
    private 
    def place_params
        params.require(:place).permit!
    end

    def address_params
        params.require(:address).permit!
    end

    def schedule_params 
        params.require(:schedule).permit!
    end

    def parking_params 
        params.require(:parking).permit!
    end

    def category_params 
        params.require(:category).permit!
    end

    def policy_params 
        params.require(:policy).permit!
    end

    def amenity_params 
        params.require(:amenities)
    end

    def rules_params 
        params.require(:rule).permit!
    end
end 
