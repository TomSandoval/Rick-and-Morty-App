import { ADD_CHARACTER, FILTER, ORDER, REMOVE_CHARACTER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.myFavorites, action.payload],
      };
    case REMOVE_CHARACTER:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };
    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter((char) => char.gender === action.payload)
      };
    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "Ascendente" ? [...state.allCharacters.sort((a, b) => a.id - b.id)] : [...state.allCharacters.sort((a, b) => b.id - a.id)],
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
