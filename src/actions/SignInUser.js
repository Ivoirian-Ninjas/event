export default function SignInUser(user){
    return dispatch =>{
        console.log(user)
          
        const params = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
           body: JSON.stringify({user: user})
        }
        fetch('http://localhost:3000/users/login',params)
        .then(resp => resp.json())
        .then(json => {
            if(json.errors){
                json.errors.forEach(e => {
                    console.log(e)
                })
            }else{
                            dispatch({type:'LOGIN_USER',user:json.user})

            }
        })
    }

  
}