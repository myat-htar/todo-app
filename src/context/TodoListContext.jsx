import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const todoData = React.createContext();
function TodoListContext(props) {
  const [todoList, setTodoList] = useState(
    () => JSON.parse(localStorage.getItem("todoList")) || []
  );
  function addToTodoList(data) {
    setTodoList(prevTodo => {
      return [...prevTodo, { todo: data, isCompleted: false, id: nanoid() }];
    });
  }
  function removeFromTodoList(id) {
    setTodoList(prevTodo => {
      return prevTodo.filter(item => item.id !== id);
    });
  }
  function markCompletedTodoList(id) {
    setTodoList(prevTodo =>
      prevTodo.map(item => {
        return item.id === id
          ? { ...item, isCompleted: !item.isCompleted }
          : item;
      })
    );
  }
  function clearCompletedTodoFromList() {
    setTodoList(prevTodo =>
      prevTodo.filter(item => item.isCompleted === false)
    );
  }
  function reorderList(reorderedList) {
    setTodoList(reorderedList);
  }
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <todoData.Provider
      value={{
        todoList,
        addToTodoList,
        removeFromTodoList,
        markCompletedTodoList,
        clearCompletedTodoFromList,
        reorderList,
      }}
    >
      {props.children}
    </todoData.Provider>
  );
}

export { TodoListContext, todoData };
