class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :host_id
      t.integer :client_id
      t.integer :place_id
      t.date :date
      t.string :title
      t.string :s_time
      t.string :e_time
      t.float :duration
      t.boolean :accepted, default: false
      t.float :price
      t.float :total
      t.float :process_fee
      t.integer :guestCount
      t.string :paymentOption
      t.timestamps
    end
  end
end
  