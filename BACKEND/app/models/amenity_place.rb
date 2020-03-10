class AmenityPlace < ApplicationRecord
  belongs_to :amenity 
  belongs_to :place
end
