import React, { Fragment } from 'react'
import Navbar  from '../Navbar'
import Searchform from '../Searchform'
import Cocktails  from '../Cocktails'
import styles from '../App.css'
function Home() {
  return (
    <Fragment>
  
    <Searchform/>
    <h2 className="title">Cocktails</h2>
    <div className='cocktails'><Cocktails/></div></Fragment>
  )
}

export default Home