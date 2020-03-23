class ActivitiesPlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :activities_places, id: false do |t|
      t.belongs_to :activity
      t.belongs_to :place 
    end
  end
end
