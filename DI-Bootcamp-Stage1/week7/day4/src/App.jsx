import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import './App.css'

class BuggyCounter extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(({ counter }) => ({ counter: counter + 1 }))
  }

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed !')
    }
    return (
      <button onClick={this.handleClick}>
        Count: {this.state.counter}
      </button>
    )
  }
}

function App() {
  return (
    <>
      {/* Simulation 1: Two BuggyCounters wrapped in ONE ErrorBoundary */}
      <h2>Simulation 1</h2>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      {/* Simulation 2: Each BuggyCounter wrapped in its OWN ErrorBoundary */}
      <h2>Simulation 2</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      {/* Simulation 3: BuggyCounter NOT wrapped in any ErrorBoundary */}
      <h2>Simulation 3</h2>
      <BuggyCounter />
    </>
  )
}

export default App
