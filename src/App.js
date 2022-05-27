import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Test from './Test'
import Something from './Something'
import Dashboard from './Dashboard'
import Stats from './Stats'
import Cocktails from './Cocktails'
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} >
          
          <Route path=':id' element={<Test />} />
          </Route>
          <Route path='dashboard' element={<Dashboard/>}>
          <Route path='stats' element={<Stats/>}/></Route>
          
        <Route path='/cocktails' element={<Cocktails/>}/>
        <Route path='/cocktail/:id' element={<SingleCocktail />} />
        <Route path='*' element={<div><h2>Error page</h2><div>error 404 </div> <Link to="/">Back to About page</Link></div>} />

      </Routes>
    </BrowserRouter>


</Fragment >
  );
}

export default App;