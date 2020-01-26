import user_reducer from './user_reducer'
import places_reducer from './places_reducer'
import {combineReducers} from 'redux'
 const allReducers = combineReducers({
    user: user_reducer,
    places: places_reducer
})
export default allReducers