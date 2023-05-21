import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTask from "./pages/CreateTask";
import Home from "./pages/Home";
import Categories from "./components/Categories";
import { FiSun, FiMoon } from "react-icons/fi";
function App() {
  //Line 8-10 is a script that gets the created task from local storage to be displayed to a user if no task it is meant to return an empty array
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );

  //Line 13-15 is a script that gets the created categories and saves in a state from local storage to be displayed to a user if no categories it is meant to return an empty array
  const [categories, setcategories] = useState(
    JSON.parse(localStorage.getItem("category")) || []
  );

  //Line 18-10 is a script that gets the created task from local storage to be displayed to a user if no task it is meant to return an emty array
  const [openModal, setOpenModal] = useState(false);
  const open = () => {
    setOpenModal(true);
  };
  const close = () => {
    setOpenModal(false);
  };
  const addTask = (text, uStatus) => {
    setTask((prev) => {
      return [
        { title: text, status: uStatus, id: Math.random().toString() },
        ...prev,
      ];
    });
  };

  const deleteTasks = (id) => {
    setTask(task.filter((item) => item.id !== id));
  };

  const addCategories = (text) => {
    setcategories((prev) => {
      return [{ status: text, id: Math.random().toString() }, ...prev];
    });
  };

  const editTask = (id, title, Ustatus) => {
    setTask(
      task.map((item) =>
        item.id == id ? { title: title, status: Ustatus, id: id } : item
      )
    );
  };
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
    localStorage.setItem("category", JSON.stringify(categories));
  }, [task, categories]);
  console.log({ categories, task });

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
      <div className="w-full h-screen  text-black dark:text-gray-500  dark:bg-slate-800 ">
        <div className="w-full flex flex-col p-6 items-end">
          <button onClick={handleTheme}>
            {theme === "dark" ? (
              <div>
                <FiMoon size={24} className="text-white" />
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
                <Home
                  task={task}
                  setTask={setTask}
                  categories={categories}
                  deleteTasks={deleteTasks}
                  modal={openModal}
                  open={open}
                  close={close}
                />
              }
            />
            <Route
              path="/createtask"
              element={<CreateTask addTask={addTask} categories={categories} />}
            />
            <Route
              path="/status"
              element={<Categories onAddCategories={addCategories} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
