class CreateAnalytics < ActiveRecord::Migration[5.2]
  def change
    create_table :analytics do |t|
      t.date :month
      t.date :year
      t.integer :place_id
      t.integer :number_view, default: 0
      t.integer :people_booked, default: 0
      t.integer :num_cancelation, default: 0
      t.timestamps
    end
  end
end
