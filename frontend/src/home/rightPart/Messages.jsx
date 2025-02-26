import { useEffect, useRef } from "react";
import useGetMessage from "../../context/useGetMessage.js";
import DisplayMessage from "./DisplayMessage.jsx";

function Messages() {
  const { messages } = useGetMessage();
  // console.log(messages);

  const lastMsgRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  }, [messages]);
  return (
    <div>
      {messages && (
        <div className="mb-[8%]">
          {messages.map((dispMessage) => {
            return (
              <DisplayMessage
                key={dispMessage._id}
                ref={lastMsgRef}
                messageFromSender={dispMessage}
              />
            );
          })}
        </div>
      )}

      {messages.length === 0 && (
        <div className="text-center mt-[20%] font-bold text-3xl italic">
          <p>say hii to start the conversation</p>
        </div>
      )}
    </div>
  );
}

export default Messages;
