import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling;

      dispatch(
        addMessages({
          name: generateRandomName(),
          message: generateRandomMessage(15) + " ",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  });

  return (
    <>
      <div className="w-full relative h-[500px] ml-2 mt-1 border border-black bg-slate-100 rounded-lg  overflow-y-scroll">
        <h1 className="w-full p-2 sticky top-0 bg-slate-100 font-bold text-xl border-b border-black ">
          Live chat
        </h1>
        <div className="mt-3 ml-3  flex flex-col-reverse justify-center ">
          {chatMessages.map((chat, index) => (
            <ChatMessage
              key={index} // Remember to add a unique key prop when iterating in React
              name={chat.name}
              message={chat.message}
            />
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(liveMessage);
          dispatch(
            addMessages({
              name: "Avi",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        className="w-full flex p-2 ml-2 border border-black rounded-lg"
      >
        <input
          className="w-full px-2 border border-black rounded-lg"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 border bg-green-400 rounded-lg">
          Submit
        </button>
      </form>
    </>
  );
};

export default LiveChat;
