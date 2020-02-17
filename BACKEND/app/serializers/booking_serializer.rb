class BookingSerializer
  include FastJsonapi::ObjectSerializer
  
  attributes :id ,:date,:start_time, :end_time, :duration, :price,:process_fee, :place 

end
