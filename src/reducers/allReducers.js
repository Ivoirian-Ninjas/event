import user_reducer from './user_reducer'
import places_reducer from './places_reducer'
import activities_reducer from './activities_reducer'
import {combineReducers} from 'redux'
import categories_reducer from './categories_reducer';
 const allReducers = combineReducers({
    user: user_reducer,
    places: places_reducer,
    activities: activities_reducer,
    categories: categories_reducer 
})
export default allReducers