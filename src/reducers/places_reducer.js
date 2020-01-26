export default function places_reducer(state={},action){
    switch(action.type){
        case 'ADD_PLACE': 
            console.log(action.places)
            return  action.places
    
        default: return state

    }
}