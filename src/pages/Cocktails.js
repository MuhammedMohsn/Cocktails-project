import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
function Cocktails({ cocktails }) {
  return (
    <Fragment>
      <div className="cocktails">
        {cocktails.map(cocktail => {
          let { id, img, name, title, type } = cocktail
          return (<div className="cocktail" key={Math.random()}>
            <img src={img} alt={name} className="cocktail_img" />
            <h2 className="cocktail_name">{name}</h2>
            <h4 className="cocktail_title" >{title}</h4>
            <h5 className="cocktail_type">{type}</h5>
            <Link to={`/cocktails/${id}`} className="link">More_info</Link>
          </div>)
        })} </div>
    </Fragment>
  )
}

export default Cocktails