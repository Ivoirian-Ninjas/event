class ConversationsUsers < ActiveRecord::Migration[5.2]
  def change

    create_table :conversations_users, id: false do |t|
      t.belongs_to :user
      t.belongs_to :conversation
    end
  end
end
