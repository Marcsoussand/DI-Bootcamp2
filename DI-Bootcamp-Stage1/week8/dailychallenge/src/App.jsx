import { useState } from 'react'
import ButtonAdd from '../Components/ButtonAdd'
import Result from '../Components/Result'
import './App.css'

function App() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operation, setOperation] = useState('+')
  const [result, setResult] = useState(null)

  const calculate = () => {
    const a = parseFloat(num1)
    const b = parseFloat(num2)
    if (isNaN(a) || isNaN(b)) return
    let res
    if (operation === '+') res = a + b
    else if (operation === '-') res = a - b
    else if (operation === '*') res = a * b
    else if (operation === '/') res = b !== 0 ? a / b : 'Cannot divide by 0'
    setResult(res)
  }

  return (
    <div className="calculator">
      <h3>Calculator</h3>
      <div className="inputs">
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Number 1" />
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Number 2" />
      </div>
      <ButtonAdd onClick={calculate} operation={operation} />
      <Result result={result} />
    </div>
  )
}

export default App
