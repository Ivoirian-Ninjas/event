class Parking < ApplicationRecord
    belongs_to :place, optional: true
end
