import React, { useState } from "react";
import TodoForm from "./Components/TodoForm";
import Todo from "./Components/Todo";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ListGroup from "react-bootstrap/ListGroup";

function App() {
  const [todos, setTodos] = useState([
    { text: "Make dinner", isCompleted: false },
    { text: "Walk the dog", isCompleted: false },
    { text: "Clean the house", isCompleted: false },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <Container fluid>
        <div className="container">
          <h1 className="header">To Do List</h1>
          {todos.map((todo, index) => (
            <ListGroup.Item>
              <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            </ListGroup.Item>
          ))}
          <h1 className="header">Add New To Do Item</h1>
          <TodoForm addTodo={addTodo} />
        </div>
      </Container>
    </div>
  );
}

export default App;
