import React, { Fragment } from 'react'
import Products from '../data'
import { Link, useParams } from 'react-router-dom'
import styles from '../App.css'
function SingleCocktail() {
  const { id } = useParams();
  
  const product = Products.find((product) => {return product.id === parseInt(id)});
  const { ide,img, name,title,type } = product;
  return (
    <section className='section_product'>
      <img src={img} alt={name} />
      <div className='info'><h5>{name}</h5>
      <h4>{title}</h4>
      <h4>{type}</h4>
      <Link to='/'>back to products</Link></div>
    </section>
  );
}

export default SingleCocktail