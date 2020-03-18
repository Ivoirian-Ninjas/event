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

    def login 
        # binding.pry
        user = User.find_by(email: params.require(:user).permit(:email)[:email] )
        
        if !user 
            render json: {errors: ["We were unable to find the user with this email: '#{params.require(:user).permit(:email)[:email]}'"]}
        else
            if user.authenticate(params.require(:user).permit(:password_digest)[:password_digest])
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
