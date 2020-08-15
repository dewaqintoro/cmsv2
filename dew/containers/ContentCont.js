// import React, { Component } from 'react'
// import '../Styling/dashboardComponent.css';
// import displayUser from './displayUser';
// export class content extends Component {
//   render() {
//     return (
//       <div>
//         {/* <displayUser/> */}
//         <div className="display-appointments">
//         <h1>dew</h1>
//         </div>
        
//         <div className="display-alert">
          
//         </div>
  
//         <div className="display-dictation">
          
//         </div>
//       </div>
//     )
//   }
// }

// export default content;


import React, { Component } from 'react'
import DisplayUser from '../components/DisplayUser'

export default class ContentCont extends Component {
  render() {
    return (
      <div className="contentWadudu">
        <div className="display-appointments">
        {/* <h1>dew</h1> */}
        <DisplayUser/>
        </div>
        
        <div className="display-alert">
          
        </div>
   
        <div className="display-dictation">
          
        </div>
      </div>
    )
  }
}
