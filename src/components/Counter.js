import {useReducer} from "react";
import reducer from "../reducers/reducer";
import './Counter.css'

export default function Counter() {

    let [{object}, dispatch] = useReducer(reducer, {object:0});
    return (
        <div className={'wrapper'}>
            <h1 className={'title'}>Counter</h1>
            <h2 className={'counter'}>{object}</h2>
            <div className={'btn'}>
                <button onClick={() => dispatch({type: 'INC_BY_10'})}>Increment by 10</button>
                <button onClick={() => dispatch({type: 'DEC_BY_2'})}>Decrement by 2</button>
                <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
            </div>
        </div>
    );
}
