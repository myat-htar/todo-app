import React, { useState, useEffect } from "react";
const themeData = React.createContext();

function ThemeContext(props) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || prefersDark
  );
  function toggleTheme() {
    setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
  }
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <themeData.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </themeData.Provider>
  );
}

export { ThemeContext, themeData };
