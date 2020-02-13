class CreateAmenities < ActiveRecord::Migration[5.2]
  def change
    create_table :amenities do |t|
      t.string :title
      t.string :icon

      t.timestamps
    end
  end
end
