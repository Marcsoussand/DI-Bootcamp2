import { useState } from 'react'

export default function Counter() {
    const [state, setState] = useState()
    const [count, setCount] = useState(0)
    const increment = () => {
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        setCount( (a) => {
            return a+1
        })
        setCount ((xyz) =>xyz +1)
        setCount( (count) => count +1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h2>Counter</h2>
            <h2>count: {count}</h2>
            <button onClick={() => increment()}> + </button>
            <button onClick={() => decrement()}> - </button>
        </div>
    )
}