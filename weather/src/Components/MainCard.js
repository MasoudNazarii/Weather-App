import React,{useState, createContext} from "react";
// import Search from "./Search";
// import { ThemeContext } from "./Theme";
import Weather from "./Weather";
import { Sun, Moon } from "./Icons";

export const ThemeContext = createContext();

export default function MainCard() {
  const [isDarkMode, setIsDarkMode] = useState(false);

    const handleThemeChange = () => {
        setIsDarkMode(!isDarkMode);
    };
  
  return (
    <>
      <ThemeContext.Provider value={isDarkMode}>
        <div className={isDarkMode ? "main-card main-card-dark" : "main-card"}>
          <div>
              <input type="checkbox" 
                  className="checkbox" 
                  id="chk"
                  checked={isDarkMode}
                  onChange={handleThemeChange} />
              <label 
                  className={isDarkMode ? "label-dark label" : "label"} 
                  htmlFor="chk">
                  <Sun />
                  <Moon />
                  <div className="ball" />
              </label>
          </div>
          {/* <Search /> */}
          <Weather />
        </div>
      </ThemeContext.Provider>
    </>
  );
}
