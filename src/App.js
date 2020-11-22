import React from 'react';
import './App.css';
import Appbar from  "./components/Appbar";
import CardInfo from "./components/Card";


function App() {
  return (
    <div >
      <Appbar />
      <header className='App'>
        <div className="App-Header">
          <CardInfo  />
        </div>
      </header>
    </div>
    
  );
}

export default App;
