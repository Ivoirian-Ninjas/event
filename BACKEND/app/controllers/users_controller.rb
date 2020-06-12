class UsersController < ApplicationController
    def create 
        # binding.pry
        user = User.create( user_params )
        if user.valid?  
            render json:  {user: user}
        else
           render json: {errors: user.errors.full_messages}
        end      
    end 
    
    def update 
        # binding.pry
        user = User.find(params[:id])  
        keys = user_params.keys
        keys.each do |e|
            # binding.pry
             user.send("#{e}=",user_params[:"#{e}"]) if user_params[:"#{e}"] != "" && e != "Position"
            #  binding.pry

             if e == "file" && user.file.attached?

                user.profile_pic = url_for(user.file)
             end
        end
        # user.password = user.password
       data =  user.save ? {user: user} : {errors: ["enable to proceed"]}
        render json: data
    end
        
    def login 
        # binding.pry
        user = User.find_by(email: params.require(:user).permit(:email)[:email] )
        
        if !user 
            render json: {errors: ["We were unable to find the user with this email: '#{params.require(:user).permit(:email)[:email]}'"]}
        else
            if user.authenticate(params.require(:user).permit(:password)[:password])
                render json: {user: user}
            else
                render json: {errors: ["You Entered the wrong password"]}
            end
        end
    end
    
    def show 
        user = User.find(params.permit(:id)[:id] )
        render json: user if user
    end

    private 
    def user_params
        params.require(:user).permit!
    end
end
