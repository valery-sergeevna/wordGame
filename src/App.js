import './App.css';
import React, {useEffect, useState} from "react";
import {Word, Keyboard, StartGame, CheckWord, Modal} from './components/index';

function App() {
  const [game, setGame] = useState(false);
  const [endGame, setEndGame] = useState(false);

  const startGame = () =>{
    setGame(!game);
    setEndGame(false);
  }

  const EndGame = () =>{
    setEndGame(true);
  }

  return (
      <div className="App">
        {!game ? <StartGame start={startGame}/> :
            <div>
              <Word/>
              <CheckWord setEndGame={setEndGame}/>
              <Keyboard/>
              {endGame && <Modal startAgain={startGame}/>}
            </div>
        }
      </div>
  )

}

export default App;
