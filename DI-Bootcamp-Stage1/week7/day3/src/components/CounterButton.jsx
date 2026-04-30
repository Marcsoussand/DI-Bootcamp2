import { useEffect } from 'react'

export default function CounterButton({ setCount, num }) {

    useEffect (() => {
        console.log('CounterButton=>', num);
        
    }, [num])
    const add = () => {
        setCount((count) => count +1);
    }


return (
    <div>
        <button onClick={()=> add()}> + </button>
    </div>
)

}
