class ActivitiesController < ApplicationController
    def index 
        activities = Activity.all.map{|e| e.title }
        render json: {activities: activities.uniq }
    end
end
