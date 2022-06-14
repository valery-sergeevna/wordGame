const initialState = {
    category: null,
    word: null
}

const SET_CATEGORY = "SET_CATEGORY";
const SET_WORD = "SET_WORD";
const CLEAR_DATA = "CLEAR_DATA";

export const gameDataReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CATEGORY:
            return {...state, category: action.category}
        case SET_WORD:
            return {...state, word: action.word}
        case CLEAR_DATA:
            return {...state, word: null, category: null}
        default:
            return state
    }
}
