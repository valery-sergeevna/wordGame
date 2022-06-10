import {useEffect, useState} from "react";
import useFetch from '../../hooks/useFetch';
import {useDispatch, useSelector} from "react-redux";

const StartGame = ({start}) => {
    const {loading, data, error} = useFetch('data.json');
    const [dataAr, setDataAr] = useState([]);
    const dispatch = useDispatch();
    const category = useSelector(state => state.gameData.category);

    useEffect(()=>{
        if(data){
            setDataAr(Object.keys(data));
        }
    }, [data]);

    const setGameData = (category) => {
        dispatch({type: "SET_CATEGORY", category: category});
        dispatch({type: "SET_WORD", word: data[category][Math.floor(Math.random() * data[category].length)]});
    }

    return (
        <div>
            <h1>Welcome!</h1>
            <p>Guess the word - a logic game in which you are given a definition of the word and you will need to compose blocks with letters from the presented blocks!</p>
            <h3>Please choose the category</h3>
            <div className="buttons">
                {dataAr.map && dataAr.map((elem, i)=><button key={i * Math.random()} className={`${category === elem ? 'active' : ''}`} onClick={() => setGameData(elem)}>{elem}</button>)}
            </div>
            <button onClick={start}>START GAME</button>
        </div>
    );
}
export default StartGame;