
import { ADD_TODO, TOGGLE_TODO } from './../actions'

const reducerTodoList = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, completed: false }]
    case TOGGLE_TODO:
      let nextState = Object.assign([], state)
      nextState[action.index].completed = !nextState[action.index].completed
      return nextState
    default:
      return state
  }
}

export default reducerTodoList;