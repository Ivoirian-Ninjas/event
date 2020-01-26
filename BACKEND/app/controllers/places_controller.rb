class PlacesController < ApplicationController
    def index 
        # binding.pry
       normilize_array = Place.all.map do |place|
                PlaceSerializer.new(place)
        end
        # binding.pry
        render json:  {places: normilize_array}
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
                    image.url = url_for(image.file)
                    image.save
                    place.images << image

                end
            end
        end
        render json: {places: PlaceSerializer.new(user.places.sort_by(&:created_at)) } 
    end
end
