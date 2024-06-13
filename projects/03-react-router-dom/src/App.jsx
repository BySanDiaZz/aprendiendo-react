import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Notes } from './components/Notes'
import { Users } from './components/Users'

const inlineStyles = {
  padding: 5
}

const App = () => {

  return (
    <BrowserRouter>

      <header>
        <Link to='/' style={inlineStyles}>
          Home
        </Link>
        <Link to='/notes' style={inlineStyles}>
          Notes
        </Link>
        <Link to='/users' style={inlineStyles}>
          Users
        </Link>
      </header>

      <Routes>
        <Route path='/'element={ <Home/> } />
        <Route path='/notes'element={ <Notes/> } />
        <Route path='/users' element={ <Users/> } />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
