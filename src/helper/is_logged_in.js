//This function will check if a user is logged
export default function is_logged_in(){
    return !!localStorage.getItem('user_id')
}