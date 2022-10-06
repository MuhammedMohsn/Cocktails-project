import React, { Fragment } from 'react'
import Searchform from '../Components/Searchform'
import Cocktails from './Cocktails'
function Home({ searchValue, setSearchValue, setcocktails,cocktails }) {
  return (
    <Fragment>
      <Searchform searchValue={searchValue} setcocktails={setcocktails} setSearchValue={setSearchValue} />
      <h2 className="title">Cocktails</h2>
      <div className='cocktails'><Cocktails cocktails={cocktails} /></div>
    </Fragment>
  )
}

export default Home