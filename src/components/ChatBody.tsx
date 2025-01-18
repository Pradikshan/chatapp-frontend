import React, { useEffect, useState } from "react";
import useAppStore from "../store/store";
import { IMessage } from "../utils/interface";

const ChatBody = () => {
  const username = useAppStore((state) => state.username);

  const socket = useAppStore((state) => state.socket);

  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    if (socket) {
      socket?.on("messageResponse", (data) => {
        setMessages((prevMessage) => [
          ...prevMessage,
          {
            text: data.text,
            username: data.username,
            id: data.id,
            socketId: data.socketId,
          },
        ]);
      });
    }

    // cleanup function to remove the event listener when the component unmounts
    // does not cause duplicate event listeners
    return () => {
      socket?.off("messageResponse");
    };
  }, [socket]);

  return (
    <div className="flex flex-col border-2 border-red-500 h-full p-3">
      {messages.map((message) =>
        message.username === username ? (
          <>
            <div className="place-self-end" key={message.id}>
              <p>You</p>
              {/* <p>General Kenobi!</p> */}
              <div className=" p-5 rounded-3xl bg-green-400">
                <p>{message.text}</p>
              </div>
            </div>
          </>
        ) : (
          <div className="place-self-start " key={message.id}>
            <p>{message.username}</p>
            {/* <p>Hello there!</p> */}
            <div className="p-5 rounded-3xl bg-amber-400">
              <p>{message.text}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ChatBody;
