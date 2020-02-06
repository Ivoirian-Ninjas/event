class PlaceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id ,:name,:address, :capacity,:price, :user, :images
end
