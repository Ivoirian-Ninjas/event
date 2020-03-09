class CreateSchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :schedules do |t|
      t.time :s_Time
      t.time :e_Time
      t.string :s_day
      t.string :e_day
      t.integer :place_id
      t.timestamps
    end
  end
end
