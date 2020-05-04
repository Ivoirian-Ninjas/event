class ConversationsChannel < ApplicationCable::Channel
  def subscribed
    conversation = Conversation.find(params[:id])
    stream_for conversation 
  end

  def receive(data)
      conversation = Conversation.find(params[:id])
      message = conversation.messages.create!({content: data["message_content"], user_id: data["current_user"] })

    if message
        serialized_data= MessageSerializer.new(message)
      ConversationsChannel.broadcast_to conversation, serialized_data
    end

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
  private
      
  def message_params
    params.permit!
  end
end
