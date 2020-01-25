export default function user_reducer(state={},action){
    switch(action.type){
        case 'LOGIN_USER': 
            console.log(action.user)
            localStorage.setItem("user_id", action.user.id)
            // use JSON.parse(localStorage.getItem('user')) to get the user object
            localStorage.setItem('user',JSON.stringify(action.user))
            return action.user
        case 'LOGOUT_USER': 
            localStorage.clear()
            window.location.reload()
            return {}
        default: return state

    }
}