import './App.css'
import { useState } from 'react';
import Counter from "./components/Counter";

// const users = [
//   {id:1, name:"John", lastName:"Due", email:"jjj@email.com"},
//   {id:2, name:"Anne", lastName:"Sur"},
//   {id:3, name:"Dan", lastName:"Mue"}
// ]

function App() {
  
  
const [x,setX] = useState({num: 10})

  const add = () => {
    // setX(x+1);
    // const newX = {...x}
    // newX.num++
    // setX(newX);
    setX({...x, num:x.num + 1});
    
  }

  return (
    <>
      <h2>Events / Life Cycle of a Component / Re-Render + Hooks </h2>
       <h2>X= {x.num}</h2>
       <button onClick={() => add()}>+</button>
  {/* <Counter/>
  <Counter/> */}
      
      {/* {
        users.map(item => {
          // return <User name={item.name} lastName={item.lastName} email={item.email}/>
          return (
            <User {...item}/>
          )
        })
      } */}
    </>
  )
}

export default App
