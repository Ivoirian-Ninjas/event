class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.string :state
      t.string :zipCode
      t.string :aptNumber
      t.string :city
      t.string :street
      t.string :country
      t.integer :place_id

      t.timestamps
    end
  end
end
