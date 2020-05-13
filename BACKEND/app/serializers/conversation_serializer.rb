class ConversationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :messages, :host, :client
end
