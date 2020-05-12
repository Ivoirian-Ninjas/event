class BookingSerializer
  include FastJsonapi::ObjectSerializer
  
  attributes :id ,:date,:s_time, :e_time, :duration, :price,:process_fee, :place, :host,:title,:client, :accepted,:guestCount, :paymentOption
  
end
