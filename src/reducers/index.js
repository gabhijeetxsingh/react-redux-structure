import counterReducers from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter : counterReducers,
    islogged : loggedReducer
});

export default allReducers;
