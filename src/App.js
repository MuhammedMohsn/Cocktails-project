import React, { Fragment,useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Cocktails from './pages/Cocktails'
import Products from './data'
import "./App.css"

function App() {
  let [searchValue, setSearchValue] = useState('')
  let [cocktails,setcocktails] = useState(Products)

  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home  setcocktails={setcocktails} cocktails={cocktails}  searchValue={searchValue} setSearchValue={setSearchValue}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/cocktails' element={<Cocktails cocktails={cocktails} />} />
          <Route path='/cocktails/:id' element={<SingleCocktail />} />
        </Routes>
      </BrowserRouter>
    </Fragment >
  );
}

export default App;