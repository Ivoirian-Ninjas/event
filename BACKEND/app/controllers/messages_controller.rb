class MessagesController < ApplicationController
    def create
              
        client = User.find(message_params[:current_user])
        host = User.find(message_params[:host_id])
        conversation = Conversation.where("host_id = ? AND client_id = ?",host.id,client.id)
        
        if conversation != []
            convo = conversation.first     
            message = convo.messages.create!({content: message_params[:message], user_id: client.id})
        else
            convo = Conversation.create({host_id: host.id, client_id: client.id})  
            message = convo.messages.create!({content: message_params[:message], user_id: client.id })
        end

        render json: {sent: true}

    end
    


      private
      
      def message_params
        params.permit!
      end
end
