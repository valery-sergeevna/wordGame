import React from 'react';
import './Modal.css'
import {useSelector} from "react-redux";

const Modal = ({startAgain}) => {
    const category = useSelector(state=>state.gameData.category);
    return (
        <div className="modal">
            <div className="modal__content">
                <h1>Congratulations!</h1>
                <p>You guessed the word from the category "{category.toLocaleUpperCase()}"</p>
                <button class="check__btn" onClick={startAgain}>Play again</button>
            </div>
        </div>
    );
};

export default Modal;