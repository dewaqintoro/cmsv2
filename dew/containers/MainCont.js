import React, { Component } from 'react'
import CardComp from '../components/CardComp';

class MainCont extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: true,
      rightOpen: true,
    }
  }

  render(props) {
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';
    let rightOpen = this.state.rightOpen ? 'open' : 'closed';
    return (
      <div id='main'>
        <div className='header'>
            <h3 className={`
                title
                ${'left-' + leftOpen}
                ${'right-' + rightOpen}
            `}>
                Main header
            </h3>
        </div>
        <div className='content'> 
            <CardComp/>
        </div>
    </div>
    )
  }
}

export default MainCont