class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :user_id
      t.integer :place_id
      t.date :date
      t.string :title
      t.string :start_time
      t.string :end_time
      t.float :duration
      t.boolean :accepted, default: false
      t.float :price
      t.float :process_fee
      t.integer :guestCount
      t.string :paymentOption
      t.timestamps
    end
  end
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
