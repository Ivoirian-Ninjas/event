class CreatePlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|
      t.string :name
      t.text :description
      t.float :price
      t.float :ratings
      t.integer :capacity
      t.integer :user_id
      t.integer :cancelation_policy_id
      t.integer :category_id
      t.string :status, default: "incomplete"
      t.timestamps
    end
  end
end
