class CreateServiceOffereds < ActiveRecord::Migration[5.2]
  def change
    create_table :service_offereds do |t|
      t.string :name
      t.string :icon
      t.text :description
      t.integer :place_id

      t.timestamps
    end
  end
end
