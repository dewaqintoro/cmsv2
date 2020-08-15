import React from 'react'
import { connect } from 'react-redux'
 
const mapStateToProps = (state) =>{
  // console.log("state cardIndo ",state)
  return{
    getCovidIndo: state.covids.getCovidIndo,
    errorCovidIndo: state.covids.errorCovidIndo
  }
}
const CardIndo = (props) => {
  const data = props.getCovidIndo[0]
  // console.log("ini data",data.name)
  // console.log("props card banget",props.getCovidIndo);
  
  return ( 
        <div id={props.id} className="cardKasus">
            <h2 id="headKasus">{data.name}</h2>
            <span className="jumlahKasus">
              <p className="kasusIndo">Meninggal : {data.meninggal}</p>
              <p className="kasusIndo">Positig : {data.positif}</p>
              <p className="kasusIndo">Sembuh : {data.sembuh}</p>
            </span>
            <div className="roundCard roundCard1"></div>
            {/* <img id="bgIndo" src="https://res.cloudinary.com/dewaqintoro/image/upload/v1596798640/icon/bg_smkno8.png" /> */}
        </div>
    
  )
}

export default connect(mapStateToProps,null) (CardIndo)
