import { useState } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import './App.css'

const inlineStyles = {
  padding: 5
}

const Home = () => <h1>Home</h1>
const Notes = () => <h1>Notes</h1>
const Users = () => <h1>Users</h1>

const App = () => {

  const [page, toPage] = useState(() => {
    const { pathname } = window.location
    const page = pathname.slice(1)
    return page
  }) 

  const getContent = () => {
    if (page === 'users'){
      return <Users />
    }else if (page === 'notes'){
      return <Notes />
    }else{
      return <Home />
    }
  }

  return (
    <BrowserRouter>
      <header>
        <Link to='/home' onClick={toPage('home')} style={inlineStyles}>
          Home
        </Link>
        <Link to='/notes' onClick={toPage('notes')} style={inlineStyles}>
          Notes
        </Link>
        <Link to='/users' onClick={toPage('users')} style={inlineStyles}>
          Users
        </Link>
      </header>
    </BrowserRouter>
  )
}

export default App
