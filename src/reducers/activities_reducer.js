export default function activities_reducer(state=[],action){
    switch(action.type){
        case 'ADD_ACTIVITIES': 
            console.log("in the action")
            console.log(action.activities)
            return action.activities
    
        default: return state

    }
}