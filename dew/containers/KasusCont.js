import React, { Component } from 'react'
import CardCont from './CardCont'
import TableComp from '../components/TableComp'

class KasusCont extends Component {
  render(props) {
    // console.log(this.props); 
    return (
      <div>
        <CardCont/>
        <TableComp corona={this.props.corona}/>
      </div>
    )
  }
}

export default KasusCont