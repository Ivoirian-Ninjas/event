class User < ApplicationRecord
    validates :email, uniqueness: true
    has_secure_password
    has_many :places
    has_many :reviews

    has_many :favorite_places
    
end
