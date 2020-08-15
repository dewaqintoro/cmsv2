import React from 'react'
import SideComp from './components/SideComp'

const Layout = (props) => {
  // console.log("props di layout = ",props);
  
  return (
    <div>
      <SideComp/>
      {props.children}
    </div>
  )
}

export default Layout
