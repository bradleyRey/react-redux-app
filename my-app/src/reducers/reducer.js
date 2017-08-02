import { combineReducers} from 'redux'
import Counter from './counter'

// As more and more reducers are made to handle state for different parts of the app, they will be added in the object below...

const Reducer = combineReducers({
  Counter
})

export default Reducer
