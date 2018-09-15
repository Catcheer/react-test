import { combineReducers } from 'redux'

import TodoReducer from '../page/Todos/actions/reducer'
import LoginReducer from '../page/Login/actions/reducer'



export default combineReducers({
  TodoReducer,
  LoginReducer
})


