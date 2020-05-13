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

    def index
        # binding.pry
        user = User.find(params_creation["current_user"])
        bookings = Booking.where("host_id = ? OR client_id = ?", user.id, user.id).map{|e| BookingSerializer.new(e)}  
        render json: {bookings: bookings}
    end
    
    def create 
        # binding.pry
        place = Place.find(params_creation[:place][:id])
        host = place.user
        client=User.find(params_creation[:client])
        conversation = Conversation.where("host_id = ? AND client_id = ?",host.id,client.id)

        if conversation != []
            convo = conversation.first     
             message = convo.messages.create!({content: params_creation[:message], user_id: client.id})
        else
            convo = Conversation.create({host_id: host.id, client_id: client.id})  
            message = convo.messages.create!({content: params_creation[:message], user_id: client.id })
        end

        hash= {date: params_creation[:string_date] ,
            duration: params_creation[:duration],
            s_time: params_creation[:s_time],
            e_time: params_creation[:e_time],
            process_fee: params_creation[:process_fee],
            price: params_creation[:price],
            total: params_creation[:total],
             guestCount: params_creation[:guestCount],
             title: params_creation[:activity],
            paymentOption: params_creation[:paymentOption], 
            host: host,
            client: client
        
        }

        booking = place.bookings.create!(hash)
    
        render json: {place: PlaceSerializer.new(place), booking: booking }
    end



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
    private 
    def params_creation 
        params.permit!
    end
end

