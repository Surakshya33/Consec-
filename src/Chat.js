import React from "react";
import "./Chat.css";
import Nav from "./components/nav/Nav";
import ChatBody from "./components/chatBody/ChatBody";

function Chat() {
  return (
    <div className="__main">
     
      
      <ChatBody />
      <Nav />
    </div>
  );
}

export default Chat;
