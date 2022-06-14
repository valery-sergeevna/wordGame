import React from 'react';
import './Modal.css'
import {useDispatch, useSelector} from "react-redux";

const Modal = ({startAgain}) => {
    const category = useSelector(state=>state.gameData.category);
    const word = useSelector(state=>state.gameData.word);
    const guessedLetters = useSelector(state=>state.letters.letters);

    const dispatch = useDispatch();

    const clearGameData = () => {
        dispatch({type: "CLEAR_DATA"});
        dispatch({type:"CLEAR_GUESSED_LETTER"})
        startAgain();
    }

    return (
        <div className="modal">
            <div className="modal__content">
                <h1>Congratulations!</h1>
                <p>You guessed the word from the category "{category.toLocaleUpperCase()}"</p>
                <button class="check__btn" onClick={clearGameData}>Play again</button>
            </div>
        </div>
    );
};

export default Modal;