import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <div className="myForm">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={(event) => setValue(event.target.value)}
              type="text"
              placeholder="Add Todo"
            />
          </Form.Group>
          <Button onClick={handleSubmit} variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default TodoForm;
