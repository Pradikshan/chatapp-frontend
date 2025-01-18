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

    if (message !== "") {
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
    } else {
      alert("Type a message before clicking send!");
    }
  };

  const handleTyping = () => {
    socket?.emit("typing", `${username} is typing...`);
  };

  const handleStopTyping = () => {
    socket?.emit("stopTyping");
  };

  return (
    <div className="chat-input-container">
      <form onSubmit={sendMessage} className="flex justify-between">
        <input
          type="text"
          id="message"
          className="border-2 border-black rounded-3xl w-full p-3"
          placeholder="Type your message here..."
          value={message}
          onChange={handleMessage}
          onKeyDown={handleTyping}
          onBlur={handleStopTyping}
        />
        <button className="message-send-btn">Send</button>
      </form>
    </div>
  );
};

export default ChatInput;
