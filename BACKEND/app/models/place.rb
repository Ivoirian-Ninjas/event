class Place < ApplicationRecord
    belongs_to :user
    has_and_belongs_to_many :amenities
    has_and_belongs_to_many :activities

    has_one :rule
    has_many :reviews 
    has_many :images
    has_one :address
    has_many :bookings
    has_many :bookers, through: :bookings, source: :user
    belongs_to :category, optional: true
    has_one :parking
    has_one :schedule
    belongs_to :cancelation_policy, optional: true
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
