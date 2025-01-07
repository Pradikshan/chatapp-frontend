import React from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";

const ChatContainer = () => {
  return (
    <div className="border-2 border-black w-full">
      <ChatHeader />
      <ChatBody />
      <ChatInput />
    </div>
  );
};

export default ChatContainer;
