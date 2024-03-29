class Conversation < ApplicationRecord
    # has_and_belongs_to_many :users
    belongs_to :client, class_name: "User", foreign_key: "client_id"
    belongs_to :host, class_name: "User", foreign_key: "host_id"
    has_many :messages
    has_many :users, through: :messages
    belongs_to :place
    has_many :images, through: :place
end
