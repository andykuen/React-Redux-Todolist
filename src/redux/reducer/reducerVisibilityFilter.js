
import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from './../actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [
    {
      text: '123',
      completed: false,
    },
    {
      text: '456',
      completed: true,
    }
  ]
}

const reducerTodoList = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, completed: false }]
    case TOGGLE_TODO:
      let newState = Object.assign({}, state)
      newState[action.index].completed = !newState[action.index].completed

      return newState
    default:
      return state
  }
}

const reducerVisibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const reducerTodo = (state = initialState, action) => {
  return {
    visibilityFilter: reducerVisibilityFilter(state.visibilityFilter, action),
    todos: reducerVisibilityFilter(state.todos, action)
  }
}

export default reducerTodo;