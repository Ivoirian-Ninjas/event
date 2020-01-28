class Image < ApplicationRecord
    has_one_attached :file

    belongs_to :place
    def thumbnail 
        return self.file.variant(resize: '700x500')
    end
end
