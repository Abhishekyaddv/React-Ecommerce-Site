import { useState} from 'react';
import {ChatInput} from './Components/ChatInput';
import  ChatMessages  from './Components/ChatMessages';
import './App.css'

function App() {
const [chatMessages, setChatMessages] = useState([
  {
    message: "Hello Chatbot",
    sender: "user",
    id: "id1",
  },
  {
    message: "Hey! How Can I help You?",
    sender: "robot",
    id: "id2",
  },
  {
    message: "Can you get me todays date?",
    sender: "user",
    id: "id3",
  },
  {
    message: "Today is November 17",
    sender: "robot",
    id: "id4",
  },
]);

//  const [chatMessages, setChatMessages] = array
//  const chatMessages = array[0];
//  const setChatMessages = array[1];

return (
  <div className = "app-container">
    
    <ChatMessages chatMessages={chatMessages} />
      <ChatInput
      chatMessages={chatMessages}
      setChatMessages={setChatMessages}
    />
  </div>
);
}

export default App
