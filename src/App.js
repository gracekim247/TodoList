import React from "react";
import TodoList from "./Todo";
import "./app.css";

function App() {
  return (
    <div 
      style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh" ,
      }}
    >
      <TodoList />
    </div>
  ) 
}

export default App;
