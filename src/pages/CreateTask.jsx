import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function CreateTask({ categories, addTask }) {
  // const getStatus = JSON.parse(localStorage.getItem("status"))
  const navigate = useNavigate();
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState(null);
  console.log(status);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task || !status) {
      setError("Please fill in all Credentials");
    } else {
      setError("");
      navigate("/");
      addTask(task, status);
    }
  };
  return (
    <div
      className={`w-full h-full fixed top-[0] backdrop-blur-2xl  animation z-50 left-0 from-transparent to-[#253D62]`}
    >
      <div className="w-full flex flex-col items-end p-5">
        <button>
          <AiOutlineClose size={24} />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-[330px] bg-[#54BAB9] border-white rounded shadow-xl  ">
          <div className="text-center w-full p-2 font-bold">
            <h1>Create Task</h1>
          </div>
          <form className="">
            <div className="px-2">
              <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                type="text"
                placeholder="Title"
                autoFocus
                className="w-full p-2 bg-[white] rounded outline-none"
              />
            </div>
            <div className="flex justify-center gap-3 items-center">
              <div className="border w-full"></div>
              <p className="font-bold">Categories</p>
              <div className="border w-full"></div>
            </div>
            <div className="flex flex-row items-center gap-3 text-center font-bold justify-center flex-wrap p-4 w-full">
              {categories?.map((category) => {
                return (
                  <button key={category.id}
                    // value={category?.status}
                    onClick={(e) => {e.preventDefault(); setStatus(category?.status)}}
                    className="w-[120px] rounded-lg shadow-md p-1 bg-[#e26d1e] text-white "
                  >
                    <p>{category.status}</p>
                  </button>
                );
              })}
            </div>
            <div className="w-full text-center p-3 font-bold">
              <button onClick={handleSubmit} className=" text-[#44A0A0] bg-white px-4 shadow-xl border-[#44A0A0] rounded-md">
                Submit Task
              </button>
            </div>
            <div className="w-full border text-red-700 bg-white dark:bg-black text-center py-2 font-bold">{error ? <span>{error}</span> : ""}</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
