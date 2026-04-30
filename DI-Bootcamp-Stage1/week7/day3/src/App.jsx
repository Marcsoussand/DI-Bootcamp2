import { useState, useEffect } from 'react'
import './App.css'
import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";

function App() {
  const [count, setCount] = useState(11)
  const [num, setNum] = useState(21)

  useEffect(() => {
    console.log('App=>', count);
    
  },[count]);

  return (
    <>
      <section id='center'>
        <h2>Sharing state</h2>
        <Counter count={count} setCount={setCount}/>
        <CounterButton setCount={setCount} num ={num}/>
        <button onClick={() => setNum(num+10)}> Set Number</button>
      </section>
    </>
  )
}

export default App
