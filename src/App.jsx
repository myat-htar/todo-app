import React, { useState, useContext } from "react";
import { themeData } from "./context/ThemeContext";
import { todoData } from "./context/TodoListContext";
/* import images */
import bg_desktop_dark from "./images/bg-desktop-dark.jpg";
import bg_desktop_light from "./images/bg-desktop-light.jpg";
import bg_mobile_dark from "./images/bg-mobile-dark.jpg";
import bg_mobile_light from "./images/bg-mobile-light.jpg";
import moon from "./images/icon-moon.svg";
import sun from "./images/icon-sun.svg";

/* import components */
import TodoList from "./components/Todo";
import Footer from "./components/Footer";
function App() {
  const [inputData, setInputData] = useState("");
  const { theme, toggleTheme } = useContext(themeData);
  const { addToTodoList } = useContext(todoData);
  function addTodo(e) {
    if (inputData !== "") {
      addToTodoList(inputData);
      setInputData("");
    }
  }
  return (
    <div className={`${theme}`}>
      <div className={`dark:bg-body-dark font-primary text-lg min-h-screen`}>
        <div role="img" aria-label="background image">
          <img
            src={theme === "dark" ? bg_mobile_dark : bg_mobile_light}
            alt="background image"
            className="md:hidden w-full"
          />
          <img
            src={theme === "dark" ? bg_desktop_dark : bg_desktop_light}
            alt="background image"
            className="hidden md:block w-full"
          />
        </div>

        <main className="w-11/12 max-w-lg mx-auto relative -top-28 sm:-top-36 xl:-top-56 ">
          {/* heading */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl text-heading font-bold uppercase tracking-widest">
              todo
            </h1>
            <img
              src={theme === "dark" ? sun : moon}
              alt="toggle theme"
              onClick={toggleTheme}
              className={"cursor-pointer"}
            />
          </div>
          {/* input */}
          <div className="flex items-center bg-todo-light dark:bg-todo-dark mt-10 mb-5 px-3 sm:px-5 py-3 rounded">
            <div
              className="w-5 h-5 bg-inherit mr-5 rounded-full border border-circle-light dark:border-circle-dark cursor-pointer"
              onClick={addTodo}
            ></div>
            <input
              className="w-11/12 bg-inherit text-todo-text dark:text-todo-text-dark border-0 outline-0"
              type="text"
              value={inputData}
              onChange={e => setInputData(e.target.value)}
              onKeyDown={e => e.key === "Enter" && addTodo()}
              placeholder="Create a new todo..."
            />
          </div>

          <TodoList />
          <p className="dark:text-light-gray-dark text-center my-10 text-sm">
            Drag and drop to reorder list
          </p>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
