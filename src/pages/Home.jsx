import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import EditTask from "../components/EditTask";
// import  date from "../lib/date/useCreateDate"
// import { Link } from 'react-router-dom'
function Home({ task, categories, deleteTasks, open, modal, close }) {
  const count = task?.reduce((sum, cur) => {
    if (cur) {
      return sum + 1;
    } else {
      return sum;
    }
  }, 0);
  // const handleDelete = () => {
  //   const selectedNote =JSON.parse(localStorage.getItem("task"));
  //   console.log(selectedNote)
  //   // navigate("/");
  // };
  return (
    <>
      <div className="w-[148px] m-auto text-center font-semibold">
        <h1 className="text-[#E9C597] text-lg font-extrabold">PERSONAL TASK MANAGER</h1>
      </div>
      <div className="w-full text-white text-center  ">
        <div className="flex flex-col-reverse md:flex-row  justify-center mt-12  gap-4">
          <div className="w-[300px] bg-[#54BAB9] shadow-2xl dark:bg-[#354259] rounded-md h-[400px] hidden md:block">
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
            <Link to={"/status"}>
              <div className="w-full py-6">
                <button className="w-[150px] py-1  rounded font-bold bg-[#38938A] dark:bg-[#44A0A0] text-white">
                  Add Category
                </button>
              </div>
            </Link>
          </div>
          <div className="w-full bg-[#54BAB9] dark:bg-[#354259] md:rounded-md hover:shadow-none shadow-2xl md:w-1/2">
            <div className="md:hidden flex items-center justify-between p-4 ">
              <Link to={"/createtask"}>
                <button className="bg-[#38938A] dark:bg-[#44A0A0] outline-none p-1 rounded-lg text-sm font-bold text-white w-[100px]">ADD TASKS</button>
              </Link> 
              <p className="font-bold text-[#1D8A8A] dark:text-[#44A0A0]">{count} Tasks</p>
            </div>
            <div className="hidden w-full md:flex text-[#1D8A8A] dark:text-[#44A0A0] p-4 bg-[#54BAB9] dark:bg-[#354259] justify-between items-center">
              <p className="font-bold">{count} Tasks</p>
              <Link to={"/createtask"}>
                <button className="bg-[#38938A] dark:bg-[#44A0A0] outline-none p-1 rounded-lg text-sm font-bold text-white w-[100px]">ADD TASKS</button>
              </Link>
              <button className="font-bold">Clear Completed</button>
            </div>
            <div className="md:space-y-3  md:p-0 bg-[#54BAB9] dark:bg-[#354259]">
              {task?.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-full flex relative  justify-around pr-0  mt-6 md:mt-0 items-center py-6 md:pl-3 hover:shadow-inner shadow-md"
                  >
                    {/* <Link to={"edit/:id"}> */}
                    <button onClick={open}>
                      <AiOutlineEdit size={24} />
                    </button>
                    <EditTask modal={modal} close={close} />
                    {/* </Link> */}
                    <button onClick={() => deleteTasks(item.id)}>
                      <AiOutlineDelete size={24} />
                    </button>
                    <div><p>{item.title}</p></div>
                    <button className="hidden md:block w-[100px] rounded-lg shadow-md p-1 bg-[#e26d1e] text-white">
                      {item.status}
                    </button>
                    <button className=" w-[70px] absolute bottom-6 right-0 md:hidden transform rotate-[270deg] text-center text-xs shadow-md p-1 bg-[#e26d1e] text-white">
                      {item.status}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
