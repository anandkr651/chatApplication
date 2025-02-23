import { IoSend } from "react-icons/io5";

function TypeSend() {
  return (
    <div className='bg-slate-800 fixed bottom-0 w-[70%] p-2 flex items-center'>
      <input type="text" placeholder="Type here" className="p-2 outline-none w-[100%] rounded-lg border border-blue-500" />
      <div className="text-3xl px-4">
      <IoSend />
      </div>
    </div>
  )
}

export default TypeSend
