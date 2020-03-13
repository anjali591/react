import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Dialog from './Dialog.js';
function App() {
  return (
    <div className="App">
      <button>CRICKET TEAM</button>
        <Dialog>
           TEAM MEMEBERS ARE 
           <p>SACHIN TENDULKAR </p>
           <p>VIRAT KOHLI </p>
        </Dialog>
        <button> TENNIS TEAM</button>
        <Dialog>
           TEAM MEMEBERS ARE 
           SANIA MIRZA
        </Dialog>
        <button> BADMINTON TEAM </button>
        <Dialog>
           TEAM MEMEBERS ARE 
           PV SINDHU
        </Dialog>        
    </div>
  );
}

export default App;
