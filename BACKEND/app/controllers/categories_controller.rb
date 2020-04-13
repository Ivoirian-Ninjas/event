class CategoriesController < ApplicationController
    
    def index 
        # binding.pry
        categories = Category.all.map{|e| e.title }
        render json: {categories: categories.uniq }
    end
end
