import {useEffect} from 'react'
import CounterButton from "./CounterButton"

export default function Counter({count, setCount}) {
    useEffect(() => {
        console.log('Counter=>', count);
        
    }, [count])
    return (
        <div>
            <h2> Count: {count}</h2>
            <CounterButton setCount={ setCount }/>
        </div>
    )
}