import React from "react";
import PropTypes from 'prop-types';

const Todo = ({ text, completed, onClick }) => {
  return (
    <li onClick={onClick}>{text} | {completed ? 'V' : 'X'}</li>
  )
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
export default Todo