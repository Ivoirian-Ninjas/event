class BookingMailer < ApplicationMailer
    def booking_notification
        @host = params[:host]
        @client = params[:client]
        @place = params[:place]
        @booking = params[:booking]
        @url  = 'http://localhost:3001/bookings'
        # binding.pry
        mail(to: @client.email, subject: "New booking event")
        # mail(to: @host.email, subject: "New booking event" , template_path: 'booking_mailer', template_name: 'booking_notification_host')

      end
end
# user: host,client: client, place: place, booking: booking