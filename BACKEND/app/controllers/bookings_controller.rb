class BookingsController < ApplicationController
    def show 
        # binding.pry
        booking = Booking.find(params.permit(:id)[:id])
        images = booking.place.images
        render json: {booking: BookingSerializer.new(booking), images: images }
    end
end
