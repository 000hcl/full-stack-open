import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import SearchBar from './components/SearchBar'


function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all')
    .then(response=>{
      setCountries(response.data)
    })
  },[])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleSpecific = (value) => {
    setSearch(value);
  }

  const testCountry = countries[0];
  return (
    <div>
    find countries <SearchBar handler={handleSearch} val={search}/>
    <Filter allCountries={countries} query={search} setFilter={handleSpecific}/>
    </div>
  );
}




export default App;
