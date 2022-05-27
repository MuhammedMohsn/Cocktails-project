import React,{Fragment} from 'react'
import {useParams} from 'react-router-dom'

function Test() {
    let {id}=useParams()
    console.log(id)
  return (
   <Fragment>
   
   <div> this is test page and id is {id}</div>
  
   </Fragment>
  )
}

export default Test