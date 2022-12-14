import React from "react";

function Buttons({ todoType, handleTodoType, display }) {
  return (
    <div
      className={`${display.mobile} md:${display.desktop} bg-todo-light dark:bg-todo-dark justify-center gap-3 
                    font-bold text-sm my-10 md:my-0 px-5 py-5 md:p-0 rounded shadow-lg md:shadow-none`}
    >
      <button
        className={`${
          todoType === "all"
            ? "text-active-button"
            : "text-light-gray dark:text-light-gray-dark"
        } 
        hover:text-todo-text hover:dark:text-button-hover-dark`}
        onClick={() => handleTodoType("all")}
      >
        All
      </button>
      <button
        className={`${
          todoType === "active"
            ? "text-active-button"
            : "text-light-gray dark:text-light-gray-dark"
        }
        hover:text-todo-text hover:dark:text-button-hover-dark`}
        onClick={() => handleTodoType("active")}
      >
        Active
      </button>
      <button
        className={`${
          todoType === "completed"
            ? "text-active-button"
            : "text-light-gray dark:text-light-gray-dark"
        } 
        hover:text-todo-text hover:dark:text-button-hover-dark`}
        onClick={() => handleTodoType("completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default Buttons;
