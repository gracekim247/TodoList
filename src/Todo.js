import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, deleteTodo } from "./features/api/todoslice";
import "./app.css";

const Todo = () => {
  const [newText, setNewText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newText.trim()) {
      dispatch(addTodo(newText));
      setNewText("");
    }
  };

  const handleUpdateTodo = (todo) => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <div className="mainDiv">
      <h1 className="header">To-Do List</h1>
      {/* adding new task */}
      <form onSubmit={handleAddTodo}>
        <div className="new-text">
          <input
              className="input"
              type="text"
              id="new-text"
              value={newText}
              placeholder="Enter a new task"
              onChange={(e) => setNewText(e.target.value)}
          />
          <button className="add">Add</button>
        </div>
      </form>

      {/* list of todos */}
      <div className="containertodo"> 
        {todos.map((todo) => (
          <div className="todo" key={todo.id}> 
            {/* checkbox for task */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleUpdateTodo(todo)}
            />
            {/* task name */}
            <h2 className="task">{todo.title}</h2>
            {/* delete button */}
            <button className="trash" onClick={() => handleDeleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
