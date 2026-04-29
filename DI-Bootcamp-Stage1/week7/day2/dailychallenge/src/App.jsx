import { useState } from 'react'
import './App.css'

function App() {
  const [languages, setLanguages] = useState([
                                            {name: "Php", votes: 0},
                                            {name: "Python", votes: 0},
                                            {name: "JavaScript", votes: 0},
                                            {name: "Java", votes: 0}
                                          ])

  const handleVote = (name) => {
    const updated = languages.map((lang) => 
    lang.name === name ? {...lang, votes: lang.votes +1} : lang)
    setLanguages(updated)
  }
  

  return (
    <>
      <h1>Vote your Language!</h1>
      <div className="cards-container">
        {languages.map((language) => (
          <div key={language.name} className="language-card">
            {language.name} {language.votes} <button onClick={() => handleVote(language.name)}>Click Here !</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
