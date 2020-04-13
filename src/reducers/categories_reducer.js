export default function categories_reducer(state=[],action){
    switch(action.type){
        case 'ADD_CATEGORIES': 
            console.log("in the action")
            
            return action.categories
    
        default: return state

    }
}