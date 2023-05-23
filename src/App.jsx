import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { FiSun, FiMoon } from "react-icons/fi";
function App() { 
  //the codes below before the return handles the light and dark mode of the application before this works we have to initialize a class in index.htm called dark 
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-schema:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <div className="w-full md:min-h-screen md:max-h-screen h-full  text-black dark:text-gray-500  dark:bg-slate-800" >
        <div className="w-full flex flex-col p-6 items-end">
          <button onClick={handleTheme}>
            {theme === "dark" ? (
              <div>
                <FiMoon size={24} className="text-black dark:text-white" />
              </div>
            ) : (
              <div>
                <FiSun size={24} />
              </div>
            )}
          </button>
        </div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
