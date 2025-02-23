import ChatUser from "./ChatUser.jsx"
import Messages from "./Messages.jsx"
import TypeSend from "./TypeSend.jsx"

function right() {
  return <div className='w-[70%] bg-slate-700 text-gray-300 h-screen overflow-scroll '>
  <ChatUser/>
  <div className="mb-10 mt-20">
  <Messages/>
  </div>
  <TypeSend/>
</div>
}

export default right
