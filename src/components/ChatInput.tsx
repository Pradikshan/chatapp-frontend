import React, { useState } from "react";

const ChatInput = () => {
  const [message, setMessage] = useState<string>("");

  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    console.log(`The message is: ${message}`);
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
        </form>
        <button className="message-send-btn">Send</button>
      </div>
    </div>
  );
};

export default ChatInput;
