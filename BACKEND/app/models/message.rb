class Message < ApplicationRecord
    belongs_to :receiver, source: :user
    belongs_to :sender, source: :user

end
