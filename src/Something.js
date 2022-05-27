import React ,{Fragment} from 'react'

function Something() {
  return (
    <Fragment><div>hello here this is nested</div> <Outlet/></Fragment>
  )
}

export default Something