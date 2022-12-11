import React, { useContext } from "react";
import { themeData } from "./context/ThemeContext";
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
  const { theme, toggleTheme } = useContext(themeData);
  return (
    <div className={`${theme} font-primary text-lg`}>
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

      <main className="w-11/12 max-w-lg mx-auto -mt-28 md:-mt-36 xl:-mt-56 ">
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
