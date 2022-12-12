import React, { useState, useContext } from "react";
import { themeData } from "../context/ThemeContext";
import { todoData } from "../context/TodoListContext";
import cross from "../images/icon-cross.svg";
function Todo() {
  const { todoList, removeFromTodoList, markCompletedTodoList } =
    useContext(todoData);
  const [todoType, setTodoType] = useState("all");
  const { theme } = useContext(themeData);
  const displayedTodos = [];
  function changeDisplayedTodo() {}
  function handleChange() {}
  return (
    <div className="flex flex-col divide-y bg-todo-light dark:bg-todo-dark rounded shadow-xl">
      {todoList.map(item => {
        return (
          <div key={item.id} className="flex items-center px-3 sm:px-5 py-3">
            <input
              type="checkbox"
              id={item.id}
              checked={item.isCompleted}
              onChange={() => markCompletedTodoList(item.id)}
              className="peer invisible w-8 mr-4"
            />
            <label
              htmlFor={item.id}
              className="todo-item
              peer-checked:todo-item-checked
              before:todo-unchecked sm:before:w-6 sm:before:h-6 
              hover:before:border-dark-grayish-blue dark:before:border-circle-dark  
              peer-checked:before:todo-checked"
            >
              <span className=""></span>
              {item.todo}
            </label>
            <div
              className="cursor-pointer"
              onClick={() => removeFromTodoList(item.id)}
            >
              <img src={cross} alt="delete todo item" />
            </div>
          </div>
        );
      })}

      {todoList.length > 0 && (
        <div className="flex justify-between px-5 py-3 text-sm">
          <p>{todoList.length} items left</p>
          <div className="flex gap-3">
            <button
              className="hover:dark:text-todo-text-hover-dark"
              onClick={() => setTodoType("all")}
            >
              All
            </button>
            <button
              className="hover:dark:text-todo-text-hover-dark"
              onClick={() => setTodoType("active")}
            >
              Active
            </button>
            <button
              className="hover:dark:text-todo-text-hover-dark"
              onClick={() => setTodoType("completed")}
            >
              Completed
            </button>
          </div>
          <button>Clear Completed</button>
        </div>
      )}
    </div>
  );
}

export default Todo;
