import React,{Fragment} from 'react'
import logo from './logo.svg'

function Navbar() {
  return (
    <Fragment>
    <nav>
    
      <a href="/">
        <img src={logo} alt='cocktail db logo' className='logo' />
      </a>
      <ul className='nav-links'>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
      </ul>
    
  </nav>
  
    </Fragment>
  )
}

export default Navbar
