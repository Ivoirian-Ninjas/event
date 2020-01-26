import is_logged_in from './is_logged_in'
//This function will check if the user is an admin
export default function is_admin(){
   const user = JSON.parse(localStorage.getItem('user'))
   return is_logged_in() ? !!user.admin : null
}

