export const LLAMA = {
    CLICK: 'LAMA_CLICK',
    RESET: 'LAMA_RESET',
};

export const llamaClickAction = () => dispatch => {
    dispatch({
        type: LLAMA.CLICK,
    });
};

export const resetLlamaClickAction = () => dispatch => {
    dispatch({
        type: LLAMA.RESET,
    });
};