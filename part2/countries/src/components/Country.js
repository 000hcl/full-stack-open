import React from 'react'
import Weather from './Weather'

const LanguageList = ({languages}) => {
    return(
      <div>
        {Object.values(languages).map(lang=>(<li key={lang}>{lang}</li>))}
      </div>
      
    )
  }

const Country = ({country}) => {
    const [lat,long] = country.capitalInfo.latlng
    return(
        <>
        <h1>{country.name.common}</h1>
        capital {country.capital[0]}
        <br></br>
        area {country.area}
        <h3>Languages</h3>
        <LanguageList languages={country.languages}/>
        <br></br>
        <img src={country.flags.png}></img>
        <Weather lat={lat} lon={long}/>
        </>
    )
}

export default Country