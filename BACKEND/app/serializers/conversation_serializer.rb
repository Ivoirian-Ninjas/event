class ConversationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :messages
end
