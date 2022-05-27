import React,{Fragment,useState} from 'react'
import { Link } from 'react-router-dom'
import Products from './data'
import styles from './App.css'
function Cocktails() {
    let [cocktails,setcocktails] = useState(Products)
    // console.log(Data)
    
  return (
    <Fragment>
    {cocktails.map(cocktail=>{

        let {id,img,name,title,type}=cocktail

        // console.log(name)
        return(<div className="cocktail" key={Math.random()}>
        <img src={img} alt={name} className="cocktail_img"/>
        <h2 className="cocktail_name">{name}</h2>
        <h4 className="cocktail_title" >{title}</h4>
        <h5 className="cocktail_type">{type}</h5>
        <Link to={`/cocktail/${id}`} className="link">More_info</Link>
        </div>)
    })}
    
    
    
    
    </Fragment>
  )
}

export default Cocktails