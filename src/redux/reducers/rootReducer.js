import {FETCH_USERS, PUSH_USER} from "../actions";

let initialState = {users: []};

export const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_USERS:
            return {...state, users:[...action.payload]}
        case PUSH_USER:
            return {...state, users:[...state.users, action.payload]}
        default:
            return  state;
    }
}
