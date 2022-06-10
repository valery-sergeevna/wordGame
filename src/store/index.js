import {createStore, combineReducers} from "redux";
import {guessedLettersReducer} from './guessedLettersReducer';
import {gameDataReducer} from './gameDataReducer';
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    letters: guessedLettersReducer,
    gameData: gameDataReducer
})

export const store = createStore(rootReducer, composeWithDevTools());