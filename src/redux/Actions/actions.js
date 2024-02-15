export const ADD_FAV = 'ADD_FAV';
export const REMOVED_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export function addFav(char){
    return{
        type: ADD_FAV,
        payload:char
    }
}

export function removeFav(id){
    return{
        type: REMOVED_FAV,
        payload:id
    }
}

export function filterCards(gender){
    return{
        type: FILTER,
        payload: gender
    }
}

export function orderCards(order){
    return{
        type: ORDER,
        payload: order
    }
}