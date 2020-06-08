class MessageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :conversation_id, :created_at, :content, :user, :user_id
  #, :status
end
