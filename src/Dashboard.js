import React ,{Fragment} from 'react'
import {Outlet} from 'react-router-dom'
function Dashboard() {
  return (
   <Fragment>
   
   <Outlet/>
   
   </Fragment>
  )
}

export default Dashboard

