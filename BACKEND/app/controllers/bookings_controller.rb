class BookingsController < ApplicationController


    def index
        #binding.pry
        user = User.find(params_creation["current_user"])
        bookings = Booking.where("host_id = ? OR client_id = ?", user.id, user.id).map{|e| BookingSerializer.new(e)}  
        render json: {bookings: bookings}
    end
    
    def create 
        # binding.pry
        place = Place.find(params_creation[:place][:id])
        host = place.user
        client=User.find(params_creation[:client])

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

        # Here we update the number of people who booked the place (this is actually how the number of booking for a place)
        if booking 
            
            BookingMailer.with(host: host,client: client, place: place, booking: booking).booking_notification.deliver_later #send an email for booking notification
            analytics = place.analytics.find_or_create_by({month: (Time.now).month, year: (Time.now).year})
            analytics.update({people_booked: analytics.people_booked + 1})
        end
    
        render json: {place: PlaceSerializer.new(place), booking: booking }
    end

    def destroy
        # binding.pry
       id = params.permit(:id)[:id]
       booking = Booking.find(id)
       place = booking.place
       analytics = place.analytics.find_or_create_by({month: (Time.now).month, year: (Time.now).year})
       analytics.update({num_cancelation: analytics.num_cancelation + 1})
       booking.delete()
       render json: {message: 'The booking was succefully cancelled'}

    end



    private 
    def params_creation 
        params.permit!
    end
end

