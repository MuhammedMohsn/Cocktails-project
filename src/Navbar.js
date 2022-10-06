import React, { Fragment } from 'react'
import logo from './logo.svg'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <Fragment>
      <nav>

        <Link to="/">
          <img src={logo} alt='cocktail db logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>

    </Fragment>
  )
}

export default Navbar
