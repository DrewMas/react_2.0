const reducer = (state, action) => {
    switch (action.type) {
        case 'INC_BY_10':
            return {...state, object: state.object + 10}
        case 'DEC_BY_2':
            return {...state, object: state.object - 2}
        case 'RESET':
            return {...state, object: state.object = 0}
        default:
            return {...state}
    }
}

export default reducer;
