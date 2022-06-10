import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import {useDispatch, useSelector} from "react-redux";

const CheckWord = ({setEndGame}) => {

    const word = useSelector(state=>state.gameData.word);
    const dispatch = useDispatch();

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValue: {
            inputWord: ''
        }
    });

    const options = {
        required: {
            value: true,
            message: 'Please, fill out this field'
        }
    }

    const onSubmit = (data) => {
        if(data.inputWord.toLowerCase() === word.name){
            setEndGame(true);
        }
    }

    return (
        <div className="check__word">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("inputWord", options)}/>
                <ErrorMessage errors={errors} as="p"></ErrorMessage>
                <button className="check__btn" type="submit">Check Word</button>
            </form>
        </div>
    );
};

export default CheckWord;