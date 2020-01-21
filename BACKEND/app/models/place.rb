class Place < ApplicationRecord
    belongs_to :user
    has_many :reviews 
    has_many :images
    has_many :service_offereds
end
