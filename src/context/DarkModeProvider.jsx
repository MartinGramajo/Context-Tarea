import { useState } from "react";
import { DarkModeContext } from "./DarkModeContext";

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <DarkModeContext.Provider
        value={{
          darkMode,
          toggleDarkMode,
        }}
      >
        {children}
      </DarkModeContext.Provider>
    </>
  );
};
