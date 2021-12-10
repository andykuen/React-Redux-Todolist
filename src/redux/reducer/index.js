import { combineReducers } from 'redux'
import reducerTodoList from './reducerTodoList'
import reducerVisibilityFilter from './reducerVisibilityFilter'

/*
state:
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
*/

const reducerIndex = combineReducers({
  visibilityFilter: reducerVisibilityFilter,
  todos: reducerTodoList
})

export default reducerIndex