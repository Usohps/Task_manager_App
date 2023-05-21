import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
function EditTask({categories,editTask,modal,close}) {
  if(!modal){
    return null
  }
  return (
    <div
    className="w-full h-full fixed top-[0] backdrop-blur-md animation z-50 left-0 from-transparent to-[#253D62] dark:from-slate-400 dark:to-white" style={{
      opacity:open?"0.5":"0"
    }}
  >
    <div className="w-full flex flex-col items-end p-5">
      <button onClick={close}>
        <AiOutlineClose className='text-black' size={24}/>
      </button>
    </div>
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-[330px] bg-[#54BAB9] dark:bg-[#354259] border-white rounded shadow-xl  ">
        <div className="text-center w-full p-2 font-bold">
          <h1>Edit Task</h1>
        </div>
        <form className="" onSubmit={editTask}>
          <div className="px-2">
            <input
              type="text"
              autoFocus
              className="w-full p-2 bg-[white] rounded outline-none text-black"
            />
          </div>
          <div className="flex flex-row items-center gap-3 text-center font-bold justify-center flex-wrap p-4 w-full">
              {categories?.map((category) => {
                return (
                  <button key={category.id}
                    onClick={(e) => {e.preventDefault(); setStatus(category?.status)}}
                    className="w-[120px] rounded-lg shadow-md p-1 bg-[#FF5252] text-white "
                  >
                    <p>{category.status}</p>
                  </button>
                );
              })}
            </div>
          <div className="w-full text-center p-3">
            <button className=" w-[150px] py-1 font-bold bg-[#38938A] dark:bg-[#44A0A0] text-white rounded-md">
              Edit Task
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default EditTask