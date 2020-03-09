class CreateParkings < ActiveRecord::Migration[5.2]
  def change
    create_table :parkings do |t|
      t.text :description
      t.integer :place_id

      t.timestamps
    end
  end
end
