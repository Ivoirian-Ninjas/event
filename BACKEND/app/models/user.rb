class User < ApplicationRecord
    validates :email, uniqueness: true
    has_secure_password
    has_many :places
    has_many :categories, through: :places
    has_many :reviews
    has_many :reviewers, through: :reviews, class_name: "User", foreign_key: "user_id"
    has_many :bookings
    has_many :booked_places, through: :bookings, source: :place
    has_many :messages
    has_many :cards
    has_many :favorites, class_name: "PLACE"
    has_one_attached :file

end
