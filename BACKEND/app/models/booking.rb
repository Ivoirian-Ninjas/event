class Booking < ApplicationRecord
    belongs_to :booker, class_name: "User", foreign_key: "user_id"
    belongs_to :place
end
