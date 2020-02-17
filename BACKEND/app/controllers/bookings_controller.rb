class BookingsController < ApplicationController
    def show 
        # binding.pry
        booking = Booking.find(params.permit(:id)[:id])
        images = booking.place.images
        host = booking.place.user
        render json: {booking: BookingSerializer.new(booking),host: host, images: images }
    end
    # state = {
    #     booking: {},
    #     images: [],
    #     host: {},
    #     guestCount: "",
    #     activity: "",
    #     message: "",
    #     paymentOption: "",
    #     cardName: "",
    #     cardNumber: ""
    # }
    def confirm
        booking = Booking.find(params.require("booking").permit("id")[:id])
        booking.accepted = true
        booking.title = params.permit("activity")[:activity]
        booking.guestCount = params.permit("guestCount")[:guestCount]
        booking.paymentOption = params.permit("paymentOption")[:paymentOption]
        message = Message.create(content: params.permit("message")[:message], sender: booking.user, receiver: booking.place.user)
            booking.place.user.messages << message  #send the message to the host
            booking.user.messages << message #send the message to the current user
        if booking.save 
            render json: {message: "we successfully processed your request. Enjoy your #{booking.title}", place_id: booking.place.id}
        else
            render json: {errors: ["We were unable to process your request!"]}
        end
    
        binding.pry
    end
end
