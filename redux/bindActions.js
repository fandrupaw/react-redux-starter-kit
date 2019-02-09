import { bindActionCreators } from 'redux';

export const bindActions = actionsList => dispatch => {
    const actions = bindActionCreators(actionsList, dispatch);
    return { actions };
};
