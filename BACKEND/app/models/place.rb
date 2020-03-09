class Place < ApplicationRecord
    belongs_to :user
    has_many :amenity_places
    has_many :amenities, through: :amenity_places    
    has_many :rules
    has_many :reviews 
    has_many :images
    has_one :address
    has_many :bookings
    has_many :bookers, through: :bookings, source: :user
    has_many :categories

    def check_availability(date, start_time, end_time )
        events = self.bookings.select{|event| event.date == Date.parse(date)}
        # binding.pry
        if events == []
           return  true
        else 
            # binding.pry
        
           result = events.last.end_time < start_time ? true : false
            result
        end
    end
end
