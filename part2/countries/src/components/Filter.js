import React from 'react'
import Country from './Country'



const Filter = ({query, allCountries, setFilter}) => {
    const filteredCountries = allCountries.filter(country => country.name.common.toUpperCase().includes(query.toUpperCase()))
    const exact = allCountries.filter(country=>country.name.common.toUpperCase()===query.toUpperCase())

    if (filteredCountries.length>10){
        return(
            <div>Too many matches, specify another filter</div>
        )
    } else if (exact.length === 1){
        return(<Country country={exact[0]}/>)
    }
     else if (filteredCountries.length === 1){
        return(<Country country={filteredCountries[0]}/>)
    } else {
        return(
            <div>
                {filteredCountries.map(country => <li key={country.name.common}>{country.name.common}<button onClick={()=>setFilter(country.name.common)}>show</button></li>)}
            </div>
        )
    }
}


export default Filter