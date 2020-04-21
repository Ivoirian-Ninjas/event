class ConversationsChannel < ApplicationCable::Channel
  def subscribed
    conversation = Conversation.find(params[:conversation])
    stream_for conversation if conversation
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
