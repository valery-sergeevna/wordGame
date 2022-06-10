const initialState = {
    letters: [],
    checkWord: false
}

const SET_GUESSED_LETTER = "SET_GUESSED_LETTER";

export const guessedLettersReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_GUESSED_LETTER:
            return {...state, letters: [...state.letters, {letter: action.payload, repeat: action.repeat}]}
        default:
            return state
    }
}
