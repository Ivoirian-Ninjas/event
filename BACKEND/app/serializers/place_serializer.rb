class PlaceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name,:address, :capacity,:price, :user, :images
end
