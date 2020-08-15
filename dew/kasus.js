import React, { Component } from 'react'
import Layout from './Layout'
import CardCont from './containers/CardCont'
import TableComp from './components/TableComp'
import { connect } from 'react-redux'
import { getCovidsList, getCovidIndo, getCovidPositif, getCovidSembuh } from './actions/userActions'

class Kasus extends Component {
   componentDidMount(){
     this.props.dispatch(getCovidsList());
     this.props.dispatch(getCovidIndo());
     this.props.dispatch(getCovidPositif())
     this.props.dispatch(getCovidSembuh())
  } 
  render() {
    return (
      <div>
        <Layout>
          <CardCont/>
          <TableComp/>
        </Layout>
      </div>
    )
  }
}

export default connect() (Kasus)
// export default Kasus
