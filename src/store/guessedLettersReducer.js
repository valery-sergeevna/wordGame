const initialState = {
    letters: [],
    checkWord: false
}

const SET_GUESSED_LETTER = "SET_GUESSED_LETTER";
const CLEAR_GUESSED_LETTER = "CLEAR_GUESSED_LETTER";

export const guessedLettersReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_GUESSED_LETTER:
            return {...state, letters: [...state.letters, {letter: action.payload}]}
        case CLEAR_GUESSED_LETTER:
            return {...state, letters: []}
        default:
            return state
    }
}
