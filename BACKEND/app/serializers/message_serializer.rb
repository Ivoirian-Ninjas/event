class MessageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :conversation_id, :created_at, :content
  #, :status
end
