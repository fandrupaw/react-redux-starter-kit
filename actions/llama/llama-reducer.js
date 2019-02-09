import { createReducer } from 'reduxDir/create-reducer';
import { LLAMA } from 'actions/llama/llama-actions';

const initialState = {
    clicks: 0,
};

export const llama = createReducer(initialState, {
    [LLAMA.CLICK](state) {
        return {
            ...state,
            clicks: state.clicks + 1,
        }
    }
});