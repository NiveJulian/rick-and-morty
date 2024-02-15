export const ADD_FAVORITE = 'ADD_FAV';
export const REMOVED_FAVORITE = 'REMOVE_FAV';
export const FILTER = 'REMOVE_FAV';

export function addFav(char){
    return{
        type: ADD_FAVORITE,
        payload:char
    }
}

export function removeFav(id){
    return{
        type: REMOVED_FAVORITE,
        payload:id
    }
}

export function filterCards(gender){
    return{
        type: FILTER,
        payload: gender
    }
}