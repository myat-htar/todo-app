import React, { useState, useContext } from "react";
import { todoData } from "../context/TodoListContext";
import Buttons from "./Buttons";
import cross from "../images/icon-cross.svg";
import { ReactSortable } from "react-sortablejs";
function Todo() {
  const {
    todoList,
    reorderList,
    removeFromTodoList,
    markCompletedTodoList,
    clearCompletedTodoFromList,
  } = useContext(todoData);
  const [todoType, setTodoType] = useState("all");
  function getNumberOfActiveTodos() {
    let length = todoList.reduce((acc, item) => {
      if (!item.isCompleted) {
        acc += 1;
      }
      return acc;
    }, 0);
    return length;
  }
  function handleTodoType(type) {
    setTodoType(type);
  }
  function changeDisplayedTodo() {
    if (todoType === "all") {
      return todoList;
    } else if (todoType === "active") {
      return todoList.filter(item => item.isCompleted === false);
    } else if (todoType === "completed") {
      return todoList.filter(item => item.isCompleted);
    }
  }
  return (
    <>
      <div className="flex flex-col divide-y dark:divide-line-between bg-todo-light dark:bg-todo-dark rounded shadow-xl">
        <ReactSortable list={todoList} setList={reorderList} animation={150}>
          {changeDisplayedTodo().map(item => {
            return (
              <div key={item.id} className="flex px-3 sm:px-5 py-3 group">
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
                  before:todo-unchecked
                  hover:before:border-dark-grayish-blue dark:before:border-circle-dark  
                  peer-checked:before:todo-checked
                  dark:peer-checked:before:todo-checked
                  group-hover:before:border-image
                  dark:group-hover:before:border-image-dark"
                >
                  <span className=""></span>
                  {item.todo}
                </label>
                <div
                  className="hidden group-hover:block group-hover:cursor-pointer"
                  onClick={() => removeFromTodoList(item.id)}
                >
                  <img src={cross} alt="delete todo item" />
                </div>
              </div>
            );
          })}
        </ReactSortable>
        <div className="flex justify-between px-5 py-3 text-sm">
          <p className="text-light-gray dark:text-light-gray-dark">
            {getNumberOfActiveTodos()}
            {`${getNumberOfActiveTodos() > 1 ? " items " : " item "}`}
            left
          </p>
          <div className="hidden md:flex">
            <Buttons
              todoType={todoType}
              handleTodoType={handleTodoType}
              display={{ mobile: "hidden", desktop: "flex" }}
            />
          </div>

          <button
            className="text-light-gray dark:text-light-gray-dark hover:text-todo-text hover:dark:text-button-hover-dark"
            onClick={clearCompletedTodoFromList}
          >
            Clear Completed
          </button>
        </div>
      </div>

      <Buttons
        todoType={todoType}
        handleTodoType={handleTodoType}
        display={{ mobile: "flex", desktop: "hidden" }}
      />
    </>
  );
}

export default Todo;
