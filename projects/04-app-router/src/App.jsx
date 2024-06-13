import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Notes } from './components/Notes'
import { Users } from './components/Users'
import { Navbar } from './components/Navbar'

const App = () => {

  return (
    <main style={{ }}>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/'element={ <Home/> } />
          <Route path='/notes'element={ <Notes/> } />
          <Route path='/users' element={ <Users/> } />
        </Routes>
        
      </BrowserRouter>
    </main>
  )
}

export default App
