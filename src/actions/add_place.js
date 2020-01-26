import current_user from '../helper/current_user'
export default function add_places(place){
    return dispatch =>{
        const user = current_user()
        console.log(user)
          const fd = new FormData()
        //   f {user_id: user.id ,place: place})
        console.log(place)
        fd.append('user_id', user.id  )
        fd.append('place[name]',place.name)
        fd.append('place[address]', place.address)
        fd.append('place[capacity]', place.capacity)
        fd.append('place[price]',place.price)
        place.images.forEach(e=>{
            fd.append('images[]',e)

        })
          console.log(fd)
        const params = {
            method: 'POST',
            headers: {
                // "Content-Type": "application/json",
                // "Accept": "application/json"
            },
           body:fd //JSON.stringify({user_id: user.id ,place: place})
        }
        fetch('http://localhost:3000/places/',params)
        .then(resp => resp.json())
        .then(json => {
            if(json.errors){
                json.errors.forEach(e => {
                    console.log(e)
                })
            }else{
                console.log(json)
                           dispatch({type:'ADD_PLACE', places: json.places})

            }
        })
    }

  
}