class BookingSerializer
  include FastJsonapi::ObjectSerializer
  
  attributes :id ,:user, :place 

end
