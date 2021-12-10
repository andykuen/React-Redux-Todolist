import { combineReducers } from 'redux'
import reducerTodoList from './reducerTodoList'
import reducerVisibilityFilter from './reducerVisibilityFilter'

const reducerIndex = combineReducers({
  visibilityFilter: reducerVisibilityFilter,
  todos: reducerTodoList
})

export default reducerIndex