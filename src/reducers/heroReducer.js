import { combineReducers } from 'redux';
import {FETCH_HEROES_PENDING, FETCH_HEROES_SUCCESS, FETCH_HEROES_ERROR} from '../actions/heoresActions';

const init_state = {
    heroes: [],
    pending:false,
    error:false,
};

const heroReducer = (state = init_state, action) => {
    switch(action.type) {
        case FETCH_HEROES_PENDING:
            return {
                ...state,
                pending: true
            };
        case FETCH_HEROES_SUCCESS:
            return {
                ...state,
                pending: false,
                heroes: action.payload
            };
        case FETCH_HEROES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            };
        default:
            return state;
    }
};
//this is the rootReducer!
export default combineReducers({
    heroes: heroReducer,
});
