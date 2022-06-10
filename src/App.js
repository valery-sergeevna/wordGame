import './App.css';
import React, {useEffect, useState} from "react";
import {Word, Keyboard, StartGame} from './components/index';

function App() {
  const [game, setGame] = useState(false);
  const startGame = () =>{
    setGame(true);
  }

  return (
      <div className="App">
        {!game ? <StartGame start={startGame}/> :
            <div>
              <Word/>
              <Keyboard/>
            </div>
        }
      </div>
  )

}

export default App;
