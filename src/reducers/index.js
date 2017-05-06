import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import layout from './layout'

const rootReducer = combineReducers({
  routing,
  layout
})

export default rootReducer
