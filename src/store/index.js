import {createStore, combineReducers, applyMiddleware} from "redux";
import {guessedLettersReducer} from './guessedLettersReducer';
import {gameDataReducer} from './gameDataReducer';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    letters: guessedLettersReducer,
    gameData: gameDataReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));