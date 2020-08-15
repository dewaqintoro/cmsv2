import React, { Component } from 'react'
import SideComp from './components/SideComp'
import TableComp from './components/TableComp'
import Link from 'next/link'
import CardCont from './containers/CardCont'
import KasusCont from './containers/KasusCont'
import Layout from './Layout'
import { Provider, connect } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from './reducers'
// import { getCovidsList } from './actions/userActions'
import Kasus from './kasus'
import SideBs from './components/SideBs'
// import content from './containers/ContentCont'
// import contentCont from './containers/ContentCont'
// import ContentCont from './containers/ContentCont'
// import Mapku from './map'
// import PersebaranCovid from './persebaran'

const store = createStore(reducer, compose(applyMiddleware(thunk))); 

class index extends Component {
 
  render() {
    return (
      // <Provider store={store}>
      //   <div className="wadudu">
      //     <Layout >
      //       <CardCont/>
      //       <TableComp/>
      //       <Kasus/>
      //       <ContentCont/>
      //     </Layout>
      //   </div>
      // </Provider> 

      <Provider store={store}>
        <div className="wadudu">
          <Layout >
            <Kasus/>
          </Layout>
        </div>
      </Provider> 

      // <div>
      //   <Layout>
      //     <PersebaranCovid/>
      //   </Layout>
      // </div>
    )
  }
}

export default index