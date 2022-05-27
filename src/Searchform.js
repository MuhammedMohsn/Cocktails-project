import React, { Fragment, useState, useRef, useContext, useEffect } from 'react'

function Searchform() {
    let inputref = useRef()
    let [searchvalue, setsearchvalue] = useState('')
    let focusinput = () => {
        inputref.current.focus()
    }
    const submithandler = (e) => {
        e.preventDefault();
        
    }
    useEffect(() => {
        focusinput()
    }, [])
    return (
        <form onSubmit={submithandler}>
            
            <label htmlFor='name'>search your favorite cocktail</label>
            <input type="text" ref={inputref} value={searchvalue} id="name"  
            onChange={()=>setsearchvalue(inputref.current.value)}/>
        </form>
    )
}

export default Searchform