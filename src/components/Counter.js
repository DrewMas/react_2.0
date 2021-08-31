import {useReducer} from "react";
import reducer from "../reduceres/reducer";

export default function Counter() {

    let [{a, b, c}, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0});


    return (
        <div>
            <h2>Counter {a}</h2>
            <button onClick={()=> dispatch({obj: 'a', type: 'INC_A'})}>Increment</button>
            <button onClick={()=> dispatch({obj: 'a', type: 'DEC_A'})}>Decrement</button>
            <button onClick={()=> dispatch({obj: 'a', type: 'RESET_A'})}>Reset</button>

            <h2>Counter {b}</h2>
            <button onClick={()=> dispatch({obj: 'b', type: 'INC_B'})}>Increment</button>
            <button onClick={()=> dispatch({obj: 'b', type: 'DEC_B'})}>Decrement</button>
            <button onClick={()=> dispatch({obj: 'b', type: 'RESET_B'})}>Reset</button>

            <h2>Counter {c}</h2>
            <button onClick={()=> dispatch({obj: 'c', type: 'INC_C'})}>Increment</button>
            <button onClick={()=> dispatch({obj: 'c', type: 'DEC_C'})}>Decrement</button>
            <button onClick={()=> dispatch({obj: 'c', type: 'RESET_C'})}>Reset</button>
        </div>
    );
}
