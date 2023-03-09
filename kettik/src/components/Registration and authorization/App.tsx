import React from 'react';
import logo from './logo.svg';
import './App.css';
import Regme from './registration';
import { UserContextProvider } from './UserContext';
import Loginme from './authentification';




function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Regme></Regme>
      </div>
    </UserContextProvider>

  );
}

export default App;
