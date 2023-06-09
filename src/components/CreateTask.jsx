import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function CreateTask({ categories, addTask, onClose }) {
  const navigate = useNavigate();
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
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
        <button className="text-black dark:text-white">
          <AiOutlineClose size={24} onClick={onClose} />
        </button>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-[250px] md:w-[400px] bg-[#54BAB9] border-white rounded shadow-xl  ">
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
                  <button
                    key={category.id}
                    onClick={(e) => {
                      e.preventDefault();
                      setStatus(category?.status);
                      setIsClicked(!isClicked);
                    }}
                    className={`${
                      status === category.status
                        ? "bg-green-950"
                        : "bg-orange-500"
                    } text-white border font-bold py-2 px-4  rounded`}
                  >
                    <p>{category.status}</p>
                  </button>
                );
              })}
            </div>
            <div className="w-full text-center p-3 font-bold">
              <button
                onClick={handleSubmit}
                className=" text-[#44A0A0] bg-white px-4 shadow-xl border-[#44A0A0] rounded-md"
              >
                Submit Task
              </button>
            </div>
            <div className="w-full border text-red-700 bg-white text-center py-2 font-bold">
              {error ? <span>{error}</span> : ""}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
