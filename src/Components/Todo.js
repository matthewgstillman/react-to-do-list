import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

const Todo = ({ todo, index, completeTodo, undoComplete, removeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <Button
          className="listButtons"
          variant="success"
          onClick={() => completeTodo(index)}
        >
          Complete
        </Button>
        <Button
          className="listButtons"
          variant="warning"
          onClick={() => removeTodo(index)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default Todo;
