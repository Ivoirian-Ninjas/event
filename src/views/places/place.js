import React from 'react'

export default function place({place}) {
    const display_images = () => {
        console.log(place.images[0].url)
        return place.images.map(e => <img key={e.id} src={e.url} height='200' width='100'/>)
    }
    return (
    
        <div>
            <h1>{place.name}</h1>
            <h1>{place.address}</h1>
            <h1>{place.capacity}</h1>
            <h1>{place.price}</h1>
            {display_images()}
            <br />
            <br />


        </div>
    )
}
