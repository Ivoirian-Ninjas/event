class CreateCancelationPolicies < ActiveRecord::Migration[5.2]
  def change
    create_table :cancelation_policies do |t|
      t.string :type
      t.text :policy
      t.integer :cancelpolicy_place_id
      t.timestamps
    end
  end
end
