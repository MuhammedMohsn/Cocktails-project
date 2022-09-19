import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';

import Cocktails from './Cocktails'
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} ></Route>
          <Route path='/cocktails' element={<Cocktails />} />
          <Route path='/cocktails/:id' element={<SingleCocktail />} />
        </Routes>
      </BrowserRouter>
    </Fragment >
  );
}

export default App;