import './App.css'
import { useState } from 'react'
import homeImg from './img/rick-morty.png'
import { Characters } from './components/Characters'

function App() {

  const [characters, setCharacters] = useState(null)

  const requestApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json()
    setCharacters(characterApi.results)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {
          characters ? (
            
            <Characters
              characters={characters}
            />

          ) : (

            <>
              <img src={homeImg} alt="Rick & Morty" className='img-home' />
              <button onClick={requestApi} className="btn-search">Ver Personajes</button>
            </>

          )
        }
      </header>
    </div>
  )
}

export default App