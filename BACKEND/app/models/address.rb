class Address < ApplicationRecord
    belongs_to :place, optional: true
end
