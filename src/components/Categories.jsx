import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function Categories(props) {
    const navigate = useNavigate()
  const [category, setcategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddCategories(category);
    navigate("/")
  };
  return (
    <div
      className={`w-full h-full fixed top-[0] backdrop-blur-2xl animation z-50 left-0 from-transparent to-[#253D62]`}
    >
      <div className="w-full flex flex-col items-end p-5">
        <button>
          <AiOutlineClose size={24} onClick={props.onClose}/>
        </button>
      </div>
      <div className=" w-full h-full flex flex-col justify-center items-center">
        <div className="w-[250px] md:w-[400px] bg-[#54BAB9] border-white rounded shadow-xl  ">
          <div className="text-center w-full p-2 font-bold">
            <h1>Create Category</h1>
          </div>
          <form className="" onSubmit={handleSubmit}>
            <div className="px-2">
              <input
                value={category}
                onChange={(e) => setcategory(e.target.value)}
                type="text"
                placeholder="Add Category"
                autoFocus
                className="w-full p-2 bg-[white] rounded outline-none"
              />
            </div>
            <div className="w-full text-center p-3">
              <button className=" text-[#44A0A0] bg-white px-4 shadow-xl border-[#44A0A0] rounded-md">
                Submit Caegory
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Categories;
