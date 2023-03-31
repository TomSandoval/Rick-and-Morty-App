import axios from "axios";
export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER"
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const GET_FAVORITES = "GET_FAVORITES";


export const removeCharacter = (id) => {
    return {type: REMOVE_CHARACTER, payload: id}
}

export const getFavorites = () => {
    return async function (dispatch) {
      const URL_BASE = "http://localhost:3001";
      const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
      dispatch({ type: GET_FAVORITES, payload: response.data });
    };
  };

export const filterCard = (gender) => {
    return {type: FILTER, payload: gender}
}

export const orderCards = (id) => {
    return {type: ORDER, payload: id}
}