class ConversationsController < ApplicationController
    def index
        conversations = Conversation.all
        normalized_convo = conversations.map{|e| ConversationSerializer.new(e)}
        render json: {conversations:  normalized_convo}
      end

      private
      def conversation_params
        params.require(:conversation).permit(:title)
      end
end
