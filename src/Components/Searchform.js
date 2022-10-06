import React, { Fragment, useRef, useEffect } from 'react'
import Products from '../data'
function Searchform({ searchValue, setSearchValue, setcocktails }) {
    let inputref = useRef()
    let focusinput = () => {
        inputref.current.focus()
    }
    const submithandler = (e) => {
        e.preventDefault();
    }
    let filter = (e) => {
        if (e.target.value === "") { setcocktails(Products) }
        else {
            let filterItems = Products.filter(product => { return product.name.toLowerCase().includes(e.target.value.toLowerCase()) })
            if (filterItems.length > 0) { setcocktails(filterItems) }
            else { setcocktails(Products) }}
    }
   useEffect(() => {
        focusinput()
    }, [])
    return (
        <Fragment>
            <form onSubmit={submithandler}>
                <label htmlFor='name'>search your favorite cocktail</label>
                <input type="text" ref={inputref} value={searchValue} id="name" style={{color: 'black'}}
                    onChange={(e) => { setSearchValue(inputref.current.value); filter(e) }} />
            </form>
        </Fragment>
    )
}

export default Searchform