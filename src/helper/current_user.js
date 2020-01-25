import is_logged_in from './is_logged_in'
 export default function current_user(){
    if (is_logged_in() ){
        return JSON.parse(localStorage.getItem('user'))
    }
}
