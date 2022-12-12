import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeContext } from "./context/ThemeContext";
import { TodoListContext } from "./context/TodoListContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContext>
      <TodoListContext>
        <App />
      </TodoListContext>
    </ThemeContext>
  </React.StrictMode>
);
