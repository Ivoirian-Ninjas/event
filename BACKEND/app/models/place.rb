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
    has_many :analytics
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

    def check_status 
        if(self.name && self.description && self.price && self.cancelation_policy && self.category_id && self.address && self.schedule && self.activities.length != 0 && self.images.length != 0)
            self.update(status: "complete")
          return  true
        else
            return false
        end  

    end
end

# t.string :name
# t.text :description
# t.float :price
# t.float :ratings
# t.integer :capacity
# t.integer :number_view
# t.integer :user_id
# t.integer :cancelation_policy_id
# t.integer :category_id
# t.string :status, default: "incomplete"