class Rule < ApplicationRecord
    belongs_to :place, optional: true
end
