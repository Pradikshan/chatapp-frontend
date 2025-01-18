import React from "react";

const ChatInput = () => {
  const handleMessage = () => {};
  return (
    <div className="chat-input-container">
      <div className="flex justify-between">
        <form>
          <input
            type="text"
            id="message"
            className="border-2 border-black rounded-3xl w-full p-3"
            placeholder="Type your message here..."
          />
          <button className="message-send-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;
