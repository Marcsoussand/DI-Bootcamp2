import './App.css'
// import Heading from './components/Heading';
// import Section from './components/Section';
// import List from './components/List';

import { useState, useRef, useEffect, createContext, type MouseEvent, type KeyboardEvent, type ChangeEvent, type ChangeEventHandler } from 'react'

// type User = {
//   id: number;
//   name: string;
//   email?: string;
// }

interface Auth {
  token: string;
  userid: string;
}

export const AuthContext = createContext<Auth | null>(null);

function App() {
const [count, setCount] = useState<number>(0)
// const [users, setUsers] = useState<User[]>([{id:1, name:'abc', email:'a@b'}])
// useEffect (() => {
//   console.log('useEffect called')
// }, [])
// const strRef = useRef<string>('abc')
const inputRef = useRef<HTMLInputElement>(null);
const handleClick = (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
  console.log(e);
}

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
}

const handleChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
  console.log(e.target.value);
}
  return (
    <>

     <section id="center">
      <input ref={inputRef} onChange={handleChange}/>
      <button onClick={(e) => handleClick(e)}>Click</button>
      {/* {strRef} */}
      <button onClick={() => setCount((count) =>count + 1)}>Count: {count}</button>
      {/* <Heading title={"My title"} subtitle="My subtitle" body="My body" />
      <Section admin={"John"}>
        <h2>Simple JSX Component</h2>
      </Section> */}

     </section>
    </>
  )
}

export default App
