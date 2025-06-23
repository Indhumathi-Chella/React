import { useContext, useState, createContext } from "react";
//create context
const ThemeContext = createContext("dark");

//set value using provider
function ThemeProvider() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <Page />
    </ThemeContext.Provider>
  );
}
function Page() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        color: theme === "light" ? "#000" : "#fff",
        backgroundColor: theme === "light" ? "#fff" : "#000",
      }}
    >
      <button
        onClick={() =>
          setTheme((theme) => (theme === "light" ? "dark" : "light"))
        }
      >
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}
export { Page, ThemeProvider };
