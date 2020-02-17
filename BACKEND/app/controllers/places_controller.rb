require "mini_magick"

class PlacesController < ApplicationController
    def index 
        # binding.pry
       normilize_array = Place.all.map do |place|
                PlaceSerializer.new(place)
        end
        # binding.pry
        render json:  {places: normilize_array}
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
        render json: {place: place, disabled_days: disabled_days}
    end

    def book
        # binding.pry 
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
            message = new_booking ? ['succes' ]: new_booking.errors.full_messages
        else
            message = ['The time selected is not available']
        end
        render json: {booked: !!new_booking, message: message,booking_id: (new_booking ? new_booking.id : nil)}

    end

    def create 
        # binding.pry
       user = User.find( params.permit(:user_id)[:user_id] )
    #    these are the value of the params
       name = params.require(:place).permit(:name)[:name]
       address = params.require(:place).permit(:address)[:address]
       capacity = params.require(:place).permit(:capacity)[:capacity]
       price = params.require(:place).permit(:price)[:price]
       images = params.require(:images)

        place = Place.create(name: name, address: address, capacity: capacity, price: price, user: user)
        if place 
            images.each do |el| 
                image = Image.new(file: el,place: place)
                # binding.pry
                if image.file.attached? 
                #thumbnail will be used to resize the image with miniMagick  '300 x 300'                   

                    image.url = url_for( image.file)
                    # binding.pry

                    image.save
                    place.images << image

                end
            end
        end
        render json: {places: PlaceSerializer.new(user.places.sort_by(&:created_at)) } 
    end
end 
