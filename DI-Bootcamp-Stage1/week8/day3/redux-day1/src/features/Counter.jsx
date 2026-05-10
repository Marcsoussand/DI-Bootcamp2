
import {useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, addInputValue} from "../redux/actions"

export default function Counter() {
    const count = useSelector(state => state.counterReducer.count )
    const dispatch = useDispatch();
    const inputRef = useRef()
    return(
        <div>
            <h2> Counter : {count} </h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <div>
                <input ref={inputRef}/>
                    <button onClick = {() => dispatch(addInputValue(Number(inputRef.current.value)))}> Add Input Value</button>
            </div>
        </div>
    )
}