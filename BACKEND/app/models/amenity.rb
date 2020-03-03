class Amenity < ApplicationRecord
    has_many :amenity_places
    has_many :places, through: :amenity_places
end
