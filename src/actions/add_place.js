import current_user from '../helper/current_user'
export default function add_places(place){
    return dispatch =>{
        const user = current_user()
        console.log(user)
          const fd = new FormData()
        //   f {user_id: user.id ,place: place})
        console.log(place)
        //place attributes
        fd.append('user_id', user.id  )
        fd.append('place[name]',place.name)
        fd.append('place[capacity]', place.capacity)
        fd.append('place[price]',place.price)
        fd.append('place[description]',place.placeDesc)

        //address
        fd.append('address[country]',place.country)
        fd.append('address[state]',place.state)
        fd.append('address[zipCode]',place.zipCode)
        fd.append('address[street]',place.street)
        fd.append('address[aptNumber]',place.aptNumber)
        fd.append('address[city]',place.city)
        fd.append('address[longitude]',place.longitud)
        fd.append('address[latitude]', place.latitude)

        //schedule
        fd.append('schedule[s_day]',place.s_day)
        fd.append('schedule[e_day]',place.e_day)
        fd.append('schedule[s_Time]',place.time[0])
        fd.append('schedule[e_Time]',place.time[1])

        //rules 
        fd.append('rule[content]', place.rules)

        //parking 
        fd.append('parking[description]',place.parkDesc)

        //category 
        fd.append('category[title]', place.typeOfSpace)

        //cancellation 
        fd.append('policy[genre]', place.policy)

        //amenities
        place.amenities.forEach( e=> fd.append('amenities[]',e) )

        //activities 
        place.activities.forEach(e => fd.append('activities[]',e.value))

        //images
        place.images.forEach( e=> fd.append('images[]',e) )

        const params = {
            method: 'POST', 
           body:fd 
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
                window.location.href = 'http://localhost:3001/places'
                        //    dispatch({type:'ADD_PLACE', places: json.places})

            }
        })
    }

  
}