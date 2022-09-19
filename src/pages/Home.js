import React, { Fragment } from 'react'
import Searchform from '../Searchform'
import Cocktails  from '../Cocktails'
function Home() {
  return (
    <Fragment>
  
    <Searchform/>
    <h2 className="title">Cocktails</h2>
    <div className='cocktails'><Cocktails/></div></Fragment>
  )
}

export default Home