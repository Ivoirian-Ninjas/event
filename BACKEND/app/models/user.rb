class User < ApplicationRecord
    validates :email, uniqueness: true
    has_secure_password
    has_many :places
    has_many :reviews
    has_many :bookings
    has_many :booked_places, through: :bookings, source: :place
    has_many :messages
    has_many :cards

    has_many :favorite_places
    
end
