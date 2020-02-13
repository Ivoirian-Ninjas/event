class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :title
      t.integer :place_id
      t.integer :user_id

      t.timestamps
    end
  end
end
