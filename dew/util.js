import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";


const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    // rgba: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 800,
  },
  recovered: {
    hex: "#5DA2D5",
    multiplier: 1200,
  },
  deaths: {
    hex: "#F3D250",
    multiplier: 2000,
  },
};


export const sortData = (data) => {
  const sortedData = [...data];

  //versi tidak simple

  // sortedData.sort((a,b) => {
  //   if(a.cases > b.cases){
  //     return -1;
  //   }else{
  //     return 1;
  //   }
  // });
  // return sortedData;
 
  // versi simple
  return sortedData.sort((a,b) => (a.cases > b.cases ? -1 : 1))
}

// memunculkan pertambahan kasus (hari ini tambah berapa)
export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";


// Draw circle on the map with interactive tooltip
export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
  <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      {/* muncul popup dengan data ketika lingkatan diklik */}
      <Popup>
      <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>

  ));