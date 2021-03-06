export default function user_reducer(state={},action){
    switch(action.type){
        case 'LOGIN_USER': 
            console.log(action.user)
            localStorage.setItem("user_id", action.user.id)
            // use JSON.parse(localStorage.getItem('user')) to get the user object
            localStorage.setItem('user',JSON.stringify(action.user))
            //redirect the user
            window.location.href = "/"
            return action.user
    
        default: return state

    }
}