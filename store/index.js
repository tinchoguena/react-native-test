import { createStore, combineReducers } from 'redux';
import rootReducer from '../src/reducers/heroReducer';

const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;
