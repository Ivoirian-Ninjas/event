class CreateCancelationPolicies < ActiveRecord::Migration[5.2]
  def change
    create_table :cancelation_policies do |t|
      t.string :genre
      t.text :content
      t.text :policy
      t.integer :place_id
      t.timestamps
    end
  end
end
