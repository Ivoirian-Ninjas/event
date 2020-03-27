class PlaceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id ,:name,:address, :capacity,:price, :user, :images, :parking, :schedule, :rule,:cancelation_policy, :amenities, :category
end
