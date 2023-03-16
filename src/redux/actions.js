export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER"
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addCharacter = (character) => {
    return{type: ADD_CHARACTER, payload: character}
}

export const removeCharacter = (id) => {
    return {type: REMOVE_CHARACTER, payload: id}
}

export const filterCard = (gender) => {
    return {type: FILTER, payload: gender}
}

export const orderCards = (id) => {
    return {type: ORDER, payload: id}
}