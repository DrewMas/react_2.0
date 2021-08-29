const reducer = (state, action) => {
    switch (action.type) {
        case 'INC_A':
            return {...state, a: state.a + 1}
        case 'DEC_A':
            return {...state, a: state.a - 1}
        case 'RESET_A':
            return {...state, a: state.a = 0}
        case 'INC_B':
            return {...state, b: state.b + 1}
        case 'DEC_B':
            return {...state, b: state.b - 1}
        case 'RESET_B':
            return {...state, b: state.b = 0}
        case 'INC_C':
            return {...state, c: state.c + 1}
        case 'DEC_C':
            return {...state, c: state.c - 1}
        case 'RESET_C':
            return {...state, c: state.c = 0}
        default:
            return {...state}
    }
}

export default reducer;
