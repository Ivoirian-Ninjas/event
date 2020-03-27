export default function places_reducer(state=[],action){
    switch(action.type){
        case 'ADD_PLACE': 
            console.log(action.places)
            console.log(action)
            state = [...action.places]
            console.log(state)
            return  state
        case 'FILTER_PLACE':
        console.log(action.places)
        state = [...action.places]
            return state
        default: return state

    }
}