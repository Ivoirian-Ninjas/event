class MessagesController < ApplicationController
    def create
      conversation= message_params[:conversation_id] ? Conversation.find(message_params[:conversation_id]) : nil
    
      if !conversation
         conversation = Conversation.create()
          user1 = User.find(message_params[:current_user])
      user2 = User.find(message_params[:host_id])
      
        conversation.users << user1    
         conversation.users << user2

      end
      message = conversation.messages.create!({content: message_params[:message_content], user_id: message_params[:current_user] })

        if message
          # serialized_data = ActiveModelSerializers::Adapter::Json.new(
            serialized_data= MessageSerializer.new(message)
          # ).serializable_hash
          
          ConversationsChannel.broadcast_to conversation, serialized_data
          head :ok
        end
      end
      
      private
      
      def message_params
        params.permit!
      end
end
