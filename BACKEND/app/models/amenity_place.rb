class AmenityPlace < ApplicationRecord
  belons_to :amenity 
  belongs_to :place
end
