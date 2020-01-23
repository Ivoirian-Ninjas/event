class UsersController < ApplicationController
    def create 
        # binding.pry
        user = User.create( name: params.require(:user).permit(:name)[:name],email: params.require(:user).permit(:email)[:email],password: params.require(:user).permit(:password_digest)[:password_digest],admin:params.require(:user).permit(:admin)[:admin] )
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
    
end
