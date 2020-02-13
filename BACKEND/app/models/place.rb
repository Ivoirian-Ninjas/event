class Place < ApplicationRecord
    belongs_to :user
    has_many :amenisties
    has_many :rule
    has_many :reviews 
    has_many :images
    has_many :service_offereds
    has_many :bookings
    has_many :bookers, through: :bookings, source: :user

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
