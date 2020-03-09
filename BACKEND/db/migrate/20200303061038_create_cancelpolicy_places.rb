class CreateCancelpolicyPlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :cancelpolicy_places do |t|
      t.integer :cancelation_policy_id 
      t.integer :place_id


      t.timestamps
    end
  end
end
