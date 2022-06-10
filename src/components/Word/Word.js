import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

const Letter = styled.span`
    width:50px;
    font-size:16px;
    margin: 0 20px;
    text-transform: uppercase;
    visibility: hidden;
    &.guessed{
       visibility: visible;
       &:after{
            visibility: hidden;
       }
    }
    &:after{
        content: '';
        display: inline-block;
        width:100%;
        height:1px;
        background:black;
        visibility: visible;
    }
`
const Word = () => {
    const [letterArray, setLetterArray] = useState([]);
    const guessed = useSelector(state=>state.letters.letters);

    const word = useSelector(state => state.gameData.word);
    const wordData = word.name.split('');

    useEffect(()=>{
        let allArray = [];

        console.log(guessed, wordData)

        setLetterArray(wordData.map((elem, i)=> {
            return allArray[i] = {
                letter: elem,
                isGuessed: guessed.some(one => one.letter === elem),
                key: i * Math.random()
            }}))
    }, [guessed]);

    const dataLetter = letterArray.map((elem, i) =>
        <Letter key={elem.key} className={`${elem.isGuessed ? 'guessed' : ''}`}>{elem.letter}</Letter>
    );
    return (
        <div className="word">
            {dataLetter}
        </div>
    );
};

export default Word;