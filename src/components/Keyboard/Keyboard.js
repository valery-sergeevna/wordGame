import React, {useEffect, useMemo, useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";

const KeyboardComponent = styled.div`
    button{
        background-color: yellow;
        width:50px;
        height:50px;
        cursor: pointer;
        margin: 5px;
        position:relative;
        &:hover{
            opacity:0.6;
        }
        &.clicked{
             background-color: red;
        }
        &.is_in_word{
            background-color: green;
        }
        span{
            position: absolute;
            content: '';
            top: 0;
            right: 0;
            background: white;
            width: 15px;
            height: 15px;
        }
    }
`

const Keyboard = () => {
    const arr_EN = useMemo(()=>['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'], [])
    const [array, setArray] = useState([]);
    const dispatch = useDispatch();

    const word = useSelector(state => state.gameData.word);

    const createObjectLetter = () =>{
        const allArray = [];
        arr_EN.map((elem, i)=>{
            return allArray[i] = {
                letter: elem,
                isInWord: false,
                repetitions: 0,
                id: parseFloat((i * Math.random()).toFixed(3))
            }})
        setArray(allArray);
    }

    const guessLetter = (letter, obj) =>{
        dispatch({type: "SET_GUESSED_LETTER", payload: letter})
    }

    const guessWord = (elem) => {
        console.log(word);
        const wordData = word.name.split('');
        setArray(array.map(obj => {
            if (obj.id === elem.id) {
                if(wordData.indexOf(obj.letter.toLowerCase()) > -1){
                    guessLetter(obj.letter.toLowerCase(), )
                }
                return {...obj,
                    clicked: true,
                    isInWord: wordData.indexOf(obj.letter.toLowerCase()) > -1 ? true : false,
                    repeat: wordData.filter(datas=>datas === elem.letter.toLowerCase()).length}
            }else{
                return obj;
            }
        }));
    }

    const dataLetter = array.map((elem, i) =>
        <button key={elem.id} id={elem.id}
                className = {`${elem.clicked ? 'clicked ' : ''}${elem.isInWord ? 'is_in_word' : ''}`}
                onClick={()=>guessWord(elem)}>{elem.letter}
            {elem.repeat > 0 && <span>{elem.repeat}</span>}
        </button>
    );

    useEffect(()=>{
        createObjectLetter();
    }, []);

    return (
        <KeyboardComponent>
           {dataLetter}
        </KeyboardComponent>
    );
};

export default Keyboard;