class ConversationsController < ApplicationController
    def index
      # binding.pry
        user = User.find(params[:current_user])
        conversations = Conversation.where("host_id = ? OR client_id = ?", user.id,user.id)
        normalized_convo = conversations.map{|e| ConversationSerializer.new(e)}
        render json: {conversations:  normalized_convo}
      end

      private
      def conversation_params
        params.require(:conversation).permit(:title)
      end
end
