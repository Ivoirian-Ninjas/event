class Review < ApplicationRecord
    belongs_to :place
    belongs_to :reviewer, class_name: "User", foreign_key: "user_id"
end
