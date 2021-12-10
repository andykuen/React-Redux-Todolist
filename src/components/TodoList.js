import React from "react";
import Todo from "./Todo";
import PropTypes from 'prop-types';

const TodoList = ({ todos, onTodoClick }) => {
  console.log("todos", todos)
  return (
    <ul>
      {todos.map((todo, index) =>
        <Todo
          key={index}
          {...todo}
          onClick={() => onTodoClick(index)}
        />
      )}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList