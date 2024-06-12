import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'

const inlineStyles = {
  padding: 5
}

const Home = () => <h1>Home</h1>
const Notes = () => <h1>Notes</h1>
const Users = () => <h1>Users</h1>

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
        <Route
          path='/'
          element={
            <Home/>
          }
        >
        </Route>

        <Route
          path='/notes'
          element={
            <Notes/>
          }
        >
        </Route>

        <Route path='/users' element={ <Users/> } />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
