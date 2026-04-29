import './App.css'
import User from './components/User';

const users = [
  {id:1, name:"John", lastName:"Due", email:"jjj@email.com"},
  {id:2, name:"Anne", lastName:"Sur"},
  {id:3, name:"Dan", lastName:"Mue"}
]

function App() {

  const handleClick = () => {
    console.log('click on a button');
    
  }

  const handleInput = (e, param) => {
    console.log('input values =>', e.target.type, e.target.value, param);
    
  }

  return (
    <>
      <h2>Events / Life Cycle of a Component / Re-Render + Hooks </h2>
      <button onClick={() => handleClick()}> Click!</button>

      <input onChange={(e) => handleInput(e,'blabla')}/>
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
