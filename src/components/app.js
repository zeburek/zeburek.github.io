import { h } from 'preact'
import { Router } from 'preact-router'

import Header from './Header'

// Code-splitting is automated for routes
import Home from '../routes/home'

const App = ({ currentUrl }) => {
  const handleRoute = e => {
    currentUrl = e.url
  }

  return (
    <div id='app' className='container'>
      <Header />
      <Router onChange={handleRoute}>
        <Home path='/' />
      </Router>
    </div>
  )
}

export default App
