import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { llama } from 'actions/llama/llama-reducer';
// reducers

export const reducers = combineReducers({
    routing: routerReducer,
    llama,
});

export default reducers;
