class CancelpolicyPlace < ApplicationRecord
    belongs_to :cancelation_policy
    belongs_to :place
end
