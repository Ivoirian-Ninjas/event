class CreateAmenityPlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :amenity_places do |t|
      t.integer :place_id
      t.integer :amenity_id

      t.timestamps
    end
  end
end
