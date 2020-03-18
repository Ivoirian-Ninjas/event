class AmenitiesPlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :amenities_places, id: false do |t|
      t.belongs_to :amenity
      t.belongs_to :place 
    end
  end
end
