class BookingsController < ApplicationController
    def show 
        # binding.pry
        booking = Booking.find(params.permit(:id)[:id])
        render json: BookingSerializer.new(booking)
    end
end
