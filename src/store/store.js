import reducer from './rootReducer'
import {createStore} from 'redux'


let initStoreValue={}

const store=createStore(reducer,initStoreValue)


export default store