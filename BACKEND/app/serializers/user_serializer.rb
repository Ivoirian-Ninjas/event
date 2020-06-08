class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :profile_pic
end
