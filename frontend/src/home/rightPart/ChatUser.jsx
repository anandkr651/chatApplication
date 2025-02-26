import useConversation from "../../zustand/useConversation.js";

function ChatUser() {
  const { selectedConversation } = useConversation();
  return (
    <div className="flex items-center justify-center bg-slate-800 p-1 fixed top-0 w-[70%] z-10">
      <div className="avatar online">
        <div className="w-10 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="px-2 ">
        <h1 className="font-bold ">{selectedConversation.fullname}</h1>
        <span>offline</span>
      </div>
    </div>
  );
}

export default ChatUser;
