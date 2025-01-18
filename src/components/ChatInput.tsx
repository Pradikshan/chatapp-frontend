import React, { useState } from "react";
import useAppStore from "../store/store";

const ChatInput = () => {
  const socket = useAppStore((state) => state.socket);

  const username = useAppStore((state) => state.username);

  const [message, setMessage] = useState<string>("");

  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (socket) {
      try {
        socket?.emit("message", {
          text: message,
          username: username,
          id: `11-01-11-${socket.id}`,
          socketId: socket.id,
        });
      } catch (error) {
        console.log(`Error sending message: ${error}`);
      }
    } else {
      console.log(`Socket initialization error`);
    }

    setMessage("");
  };
  return (
    <div className="chat-input-container">
      <div className="flex justify-between">
        <form onSubmit={sendMessage} className="w-full">
          <input
            type="text"
            id="message"
            className="border-2 border-black rounded-3xl w-full p-3"
            placeholder="Type your message here..."
            value={message}
            onChange={handleMessage}
          />
          <button className="message-send-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;
