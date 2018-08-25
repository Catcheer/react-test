import {reducer} from './reducer'
import {createStore} from 'redux'

import initStoreValue from "../mock/TodoList";

const store=createStore(reducer,initStoreValue)


export default store