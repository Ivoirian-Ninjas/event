class CreatePlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|
      t.string :name
      t.string :address
      t.float :ratings
      t.integer :capacity
      t.integer :number_view
      t.integer :user_id
      t.timestamps
    end
  end
end
