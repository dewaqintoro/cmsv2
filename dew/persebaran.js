import React, { useState,useEffect } from 'react'
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import { InfoBoxku } from './components/infoBox';
import Mapku from './map';
import Tableku from './components/Table';
import { sortData,prettyPrintStat } from './util';
import LineGraph from './components/LineGraph';
import Layout from './Layout';


const PersebaranCovid = () => {
  const [countries, setCountries] = useState([]);
  const [country,setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data)
    })
  },[])

  useEffect(() => {
    const getCountriesData = async()=>{
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2
          }
        ));

        const sortedData = sortData(data);
        setTableData(sortedData)
        setMapCountries(data)
        setCountries(countries);
      });
    };

    getCountriesData()
  },[]);

  const onCountryChange = async (event)=>{
    const countryCode = event.target.value;
    // setCountry(countryCode);


    const url = 
      countryCode === "worldwide" 
        ? "https://disease.sh/v3/covid-19/all" 
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

      console.log("code => ", countryCode)

      await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode);
        setCountryInfo(data);

        // membuat ditengah saat milih lokasi
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
    };

  console.log("Country Info >>>> ", countryInfo)


  return (
    <Layout>
    <div className="app">

      
      <div className="app__left">
        <div Name="app__header">
          <FormControl className="app__dropdown">
            <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Dunia</MenuItem>

              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select> 
          </FormControl>
          </div> 
            
          <div className="app__stats">
            <InfoBoxku 
            // jika diklik berubah berdasarkan kasus
            onClick={(e) => setCasesType("cases")}
            active={casesType === "cases"}
            isRed
            classN="casesStat"
            title="Positif" 
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={prettyPrintStat(countryInfo.cases)}/>
 
            <InfoBoxku 
            onClick={(e) => setCasesType("recovered")}
            active={casesType === "recovered"}
            isRed
            title="Sembuh" 
            classN="recoveredStat"
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={prettyPrintStat(countryInfo.recovered)}/>

            <InfoBoxku 
            onClick={(e) => setCasesType("deaths")}
            active={casesType === "deaths"}
            isRed
            title="Meninggal"
            classN="deathsStat" 
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={prettyPrintStat(countryInfo.deaths)}/>

          </div>

          <Mapku 
            countries={mapCountries}
            casesType={casesType} //jika cardInfo diklik, lingkaran di maps akan berubah sesuai case
            casesType={casesType}
            center={mapCenter}
            zoom={mapZoom}
          />
      </div>

        <Card className="app__right">
          <CardContent>
            <h3>Kasus Berdasarkan Negara</h3>
            <Tableku countries={tableData}/>
              <h3 className="app__graphTitle">{casesType}</h3>
            <LineGraph className="app__graph" casesType={casesType}/>
          </CardContent>
        </Card>
    </div>
    </Layout>
  )
}

export default PersebaranCovid