import { useState } from 'react'
import Car from "./components/Car"
import Garage from './components/Garage'
import Events from './components/Events'
import Phone from './components/Phone'
import Color from './components/Color'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const carInfo = {name: "Ford", model: "Mustang"};

  return (
    <>
      <Car carInfo={carInfo}>
        <Garage size="small"/>
      </Car>
      <Events/>
      <Phone/>
      <Color/>
    </>
  )
}

export default App
