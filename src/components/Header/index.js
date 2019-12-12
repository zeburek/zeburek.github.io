import { h } from 'preact'
import { Link } from 'preact-router/match'

const Header = () => (
  <nav class='navbar navbar-expand-sm navbar-dark bg-dark'>
    <a class='navbar-brand' href='/'>zeburek.github.io</a>
    <button
      class='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarNavAltMarkup'
      aria-expanded='false'>
      <span class='navbar-toggler-icon' />
    </button>
    <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
      <div class='navbar-nav'>
        <Link className='nav-item nav-link' activeClassName={'active'} href='/'>Home</Link>
      </div>
    </div>
  </nav>
)

export default Header
