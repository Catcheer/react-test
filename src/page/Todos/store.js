import {todos} from './reducer'
import {createStore} from 'redux'

import mockTodolist from "../../mock/TodoList";

const store=createStore(todos,mockTodolist)

export default store