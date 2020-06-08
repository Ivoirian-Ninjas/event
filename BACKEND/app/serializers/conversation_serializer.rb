class ConversationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :messages, :host, :client
  has_many :messages
  has_many :users, through: :messages
end
