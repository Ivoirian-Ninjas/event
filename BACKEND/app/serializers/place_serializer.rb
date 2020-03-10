class PlaceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id ,:name,:address, :capacity,:price, :user, :images, :parking, :schedule, :rules,:cancelation_policy, :amenities
end
