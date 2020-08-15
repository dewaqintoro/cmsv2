import React, { Component } from 'react'
// import CardIndo from '../components/CardIndo'
import CardComp from '../components/CardComp'
import { connect } from 'react-redux'
// import positif from "../../assets/mdi_mood_bad.png"

const mapStateToProps = (state) =>{
  // console.log("state cardContainer wadudu ",state)
  return{
    getCovidPositif: state.covids.getCovidPositif,
    errorCovidPositif: state.covids.errorCovidPositif,
    getCovidSembuh: state.covids.getCovidSembuh,
    errorCovidSembuh: state.covids.errorCovidSembuh
    
  }
}

class CardCont extends Component {
  render(props) {
    // console.log("wadudu ",this.props)
    const positif = this.props.getCovidPositif
    const sembuh = this.props.getCovidSembuh
    // console.log("wadudu positif",positif)
 
    return (
        <div className="card1"> 
          {/* <CardIndo id="idIndo"/> */}
          <CardComp id="idPositif" headKasus="Positif" jumlahKasus={positif.value} ikon="https://res.cloudinary.com/dewaqintoro/image/upload/v1596616012/icon/sad_mblguq.png"/>
          <CardComp id="idSembuh" headKasus="Sembuh" jumlahKasus={sembuh.value} ikon="https://res.cloudinary.com/dewaqintoro/image/upload/v1596616012/icon/happy_vg0enk.png"/>
          <CardComp id="idMeninggal" headKasus="Meninggal" jumlahKasus="701,085" ikon="https://res.cloudinary.com/dewaqintoro/image/upload/v1596616012/icon/sad2_ggbjgz.png"/>

{/* 
          <CardComp headKasus="Positif" jumlahKasus="18,563,065" ikon="https://res.cloudinary.com/dewaqintoro/image/upload/v1596616012/icon/sad_mblguq.png"/>
          <CardComp headKasus="Sembuh" jumlahKasus="11,156,889" ikon="https://res.cloudinary.com/dewaqintoro/image/upload/v1596616012/icon/happy_vg0enk.png"/>
          <CardComp headKasus="Meninggal" jumlahKasus="701,085" ikon="https://res.cloudinary.com/dewaqintoro/image/upload/v1596616012/icon/sad2_ggbjgz.png"/> */}

        </div>
    )
  }
}

export default connect(mapStateToProps,null) (CardCont)