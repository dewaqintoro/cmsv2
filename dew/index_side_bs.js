import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from './reducers'

import SideBs from "./components/SideBs";
import ContentBs from "./components/ContentBs";

const store = createStore(reducer, compose(applyMiddleware(thunk))); 


const index = () => {

  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
 
  return (
    // <Provider store={store}>
    //   <div className="App">
    //     <div className="wrapper">
    //       <SideBs toggle={toggleSidebar} isOpen={sidebarIsOpen} />
    //       <ContentBs toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
    //     </div>
    //   </div>
    // </Provider>
  )
}

export default index