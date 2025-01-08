import React from "react";

const ChatBody = () => {
  return (
    <div className="flex flex-col border-2 border-red-500 h-full p-3">
      <div className="place-self-start p-5 rounded-3xl bg-amber-400">
        <p>Hello there!</p>
      </div>
      <div className="place-self-end p-5 rounded-3xl bg-green-400">
        <p>General Kenobi!</p>
      </div>
    </div>
  );
};

export default ChatBody;
