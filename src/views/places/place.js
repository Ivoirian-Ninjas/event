import React from 'react'

export default function place({place}) {
    const display_images = () => {
        console.log(place.images[0].url)
        console.log(place)
        return place.images.map(e => <div style={{height: '100px', width:'100px'}}><img alt="" style={{height: '100%', width:'100%'}} key={e.id} src={e.url} /></div>)
    }

    return (

    
        <div>
            <h4>{place.name}</h4>
            <h4>{place.address.street}</h4>
            <h4>Capacity: {place.capacity}</h4>
            <h4>Price: ${place.price}</h4>
            {display_images()}
            <a href={`/places/` + place.id}>View this place</a>
            <br />
            <br />


        </div>
    )
}
