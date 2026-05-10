import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addInputValue } from "./counterSlice";

export default function Counter() {
     const count = useSelector(state => state.counter.count);
     const dispatch = useDispatch()
     const inputRef = useRef()

     return(
        <>
        <h2>Counter : {count}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <input ref={inputRef}/>
        <button onClick={() => dispatch(addInputValue(Number(inputRef.current.value)))}>Add Input Value</button>
        </>
     )
}