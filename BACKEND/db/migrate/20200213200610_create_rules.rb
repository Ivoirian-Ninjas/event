class CreateRules < ActiveRecord::Migration[5.2]
  def change
    create_table :rules do |t|
      t.text :content
      t.integer :place_id

      t.timestamps
    end
  end
end
