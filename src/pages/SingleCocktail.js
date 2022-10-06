import React, { Fragment } from 'react'
import Products from '../data'
import { Link, useParams } from 'react-router-dom'
function SingleCocktail() {
  const { id } = useParams();

  const product = Products.find((product) => { return product.id === parseInt(id) });
  const { img, name, title, type } = product;
  return (<Fragment>
    <section className='section_product'>
      <img src={img} alt={name} className='cocktail_img' />
      <div className='info'><h3>The cocktail name is : {name}</h3>
        <h3>The cocktail title is : {title}</h3>
        <h3>The cocktail type is : {type}</h3>
        <Link to='/Cocktails'>back to Cocktails</Link></div>
    </section>
  </Fragment>

  );
}

export default SingleCocktail