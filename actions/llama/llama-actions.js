export const LLAMA = {
    CLICK: 'LAMA_CLICK',
};

export const llamaClickAction = () => dispatch => {
    dispatch({
        type: LLAMA.CLICK,
    });
};