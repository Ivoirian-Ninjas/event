class ConversationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :messages, :host, :client, :created_at, :place
  belongs_to :place
  has_many :images, through: :place
  has_many :messages
  has_many :users, through: :users
end
