import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatScreen from './chatscreen';


// 

// const messages = [
//   { username: 'Amy', text: 'Hi, Jon!' },
//   { username: 'Amy', text: 'How are you?' },
//   { username: 'John', text: 'Hi, Amy! Good, you?' },
// ];

function App() {
  const users = [{ username: 'Amy' }, { username: 'John' }];
  const [messages, setmessages] = useState([]);
  
  const handleAdd = (message) => {
    setmessages([...messages, message]);
  }
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <div className="container">
        {users.map(user=>
        <ChatScreen key={user.username} user={user} messages={messages} handleAdd={handleAdd}/>
        )}
      </div>
    </>
  );

}

export default App;
