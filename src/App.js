import React from "react";
import './App.css';
import Main from "./Components/Main/Main";
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
      <div>
        <Main></Main>
        <MessengerCustomerChat pageId="100848928862340" appId="913998976061847"/>
      </div>
  );
}

export default App;
