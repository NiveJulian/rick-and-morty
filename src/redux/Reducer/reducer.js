import { ADD_FAVORITE, REMOVED_FAVORITE } from "../Actions/actions";

const initialState = {
    myFavorites: []
}

const rootReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }

            case REMOVED_FAVORITE:
                return{
                    ...state,
                    myFavorites: state.myFavorites.filter((char)=> char.id !== payload)
                }
    
        default:
            return{...state};
    }
}

export default rootReducer;