import { createStore, combineReducers, applyMiddleware } from 'redux';
import rootReducer from '../src/reducers/heroReducer';
import thunk from 'redux-thunk';

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;
