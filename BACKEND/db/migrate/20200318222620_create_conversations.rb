class CreateConversations < ActiveRecord::Migration[5.2]
  def change
    create_table :conversations do |t|
      t.integer :place_id
      t.integer :host_id
      t.integer :client_id
      t.timestamps
    end
  end
end
