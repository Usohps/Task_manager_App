import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import EditTask from "../components/EditTask";
import CreateTask from "../components/CreateTask";
import { useState, useEffect } from "react";
import useCreateDate from "../lib/date/useCreateDate";
import Categories from "../components/Categories";
// import  date from "../lib/date/useCreateDate"
// import { Link } from 'react-router-dom'
function Home({}) {
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selecetedTask, setSelectedTask] = useState({});
  const count = task?.reduce((sum, cur) => {
    if (cur) {
      return sum + 1;
    } else {
      return sum;
    }
  }, 0);

  //Line 8-10 is a script that gets the created task from local storage to be displayed to a user if no task it is meant to return an empty array

  //Line 13-15 is a script that gets the created categories and saves in a state from local storage to be displayed to a user if no categories it is meant to return an empty array
  const [categories, setcategories] = useState(
    JSON.parse(localStorage.getItem("category")) || []
  );

  //Line 18-10 is a script that gets the created task from local storage to be displayed to a user if no task it is meant to return an emty array
  const [openModal, setOpenModal] = useState(false);
  const open = () => {
    setOpenModal(true);
  };
  const addTask = (text, uStatus) => {
    const date = useCreateDate();
    setTask((prev) => {
      setOpenCreateModal(false);
      return [
        {
          title: text,
          status: uStatus,
          date: date,
          id: Math.random().toString(),
        },
        ...prev,
      ];
    });
  };

  const deleteTasks = (id) => {
    setTask(task.filter((item) => item.id !== id));
  };

  const addCategories = (text) => {
    setcategories((prev) => {
      setOpenCategories(false);
      return [{ status: text, id: Math.random().toString() }, ...prev];
    });
  };

  const editTask = (task, status) => {
    console.log({ task, status });
    const editedTaskList = task.map((_task) => {
      // if this task has the same ID as the edited task
      if (_task - id === task.id) {
        return { title: task.title, status: status, ..._task };
      }
      return task;
    });
    setTask(editedTaskList);
  };

  const aboutToEdit = (item) => {
    console.log({ item });
    setSelectedTask(item);
    setOpenEditModal(true);
  };
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
    localStorage.setItem("category", JSON.stringify(categories));
  }, [task, categories]);
  console.log({ categories, task });

  return (
    <div className="py-6">
      <div className="w-[148px] m-auto text-center font-semibold">
        <h1 className="text-[#E9C597] text-lg font-extrabold">
          PERSONAL TASK MANAGER
        </h1>
      </div>
      <div className="w-full text-white text-center  ">
        <div className="flex flex-col md:flex-row  justify-center mt-12  gap-4">
          <div className="w-[300px] bg-[#54BAB9] shadow-2xl dark:bg-[#354259] m-auto md:m-0 rounded-md">
            <div className="flex justify-center py-4 gap-3 items-center">
              <div className="border w-full"></div>
              <p className="font-bold">Categories</p>
              <div className="border w-full"></div>
            </div>
            <div className="w-full space-y-4 flex flex-col items-center justify-center pt-3">
              {categories?.map((category) => {
                return (
                  <button
                    value={categories.status}
                    key={category.id}
                    className="w-[120px] rounded-lg shadow-md p-1 bg-[#e26d1e] text-white "
                  >
                    <p>{category.status}</p>
                  </button>
                );
              })}
            </div>
            <div className="w-full py-6">
              <button
                onClick={() => setOpenCategories(true)}
                className="w-[150px] py-1  rounded font-bold bg-[#38938A] dark:bg-[#44A0A0] text-white"
              >
                Add Category
              </button>
            </div>
          </div>
          <div className="w-full bg-[#54BAB9] dark:bg-[#354259] md:rounded-md hover:shadow-none shadow-2xl md:w-1/2">
            <div className="md:hidden flex items-center justify-between p-4 ">
              <button
                onClick={() => setOpenCreateModal(true)}
                className="bg-[#38938A] dark:bg-[#44A0A0] outline-none p-1 rounded-lg text-sm font-bold text-white w-[100px]"
              >
                ADD TASKS
              </button>
              <p className="font-bold text-[#1D8A8A] dark:text-[#44A0A0]">
                {count} Tasks
              </p>
            </div>
            <div className="hidden w-full md:flex text-[#1D8A8A] dark:text-[#44A0A0] p-4 bg-[#54BAB9] dark:bg-[#354259] justify-between items-center">
              <p className="font-bold">{count} Tasks</p>
              <button
                onClick={() => setOpenCreateModal(true)}
                className="bg-[#38938A] dark:bg-[#44A0A0] outline-none p-1 rounded-lg text-sm font-bold text-white w-[100px]"
              >
                ADD TASKS
              </button>
              <button className="font-bold">Clear Completed</button>
            </div>
            <div className="md:space-y-3  md:p-0 bg-[#54BAB9] dark:bg-[#354259]">
              {task?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="w-full p-2 text-left font-bold ">
                      {item.date}
                    </div>
                    <div
                      key={item.id}
                      className="w-full flex relative  justify-around pr-0  mt-6 md:mt-0 items-center py-6 md:pl-3 hover:shadow-inner shadow-md"
                    >
                      <button onClick={open}>
                        <AiOutlineEdit
                          size={24}
                          onClick={() => aboutToEdit(item)}
                        />
                      </button>

                      <button onClick={() => deleteTasks(item.id)}>
                        <AiOutlineDelete size={24} />
                      </button>
                      <div>
                        <p>{item.title}</p>
                      </div>
                      <button className="hidden md:block w-[100px] rounded-lg shadow-md p-1 bg-[#e26d1e] text-white">
                        {item.status}
                      </button>
                      <button className=" w-[70px] absolute bottom-6 right-0 md:hidden transform rotate-[270deg] text-center text-xs shadow-md p-1 bg-[#e26d1e] text-white">
                        {item.status}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {openCreateModal && (
        <CreateTask
          onClose={() => setOpenCreateModal(false)}
          categories={categories}
          addTask={addTask}
        />
      )}
      {openCategories && (
        <Categories
          onClose={() => setOpenCategories(false)}
          onAddCategories={addCategories}
        />
      )}
      {openEditModal && (
        <EditTask
          onClose={() => setOpenEditModal(false)}
          editTask={editTask}
          selecetedTask={selecetedTask}
          categories={categories}
        />
      )}
    </div>
  );
}

export default Home;
