import React from "react";
import {ChatEngine} from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed"
import LoginForm from "./components/LoginForm";

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID="af9196f8-46f4-4151-b006-d563d8730a1d"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App;
