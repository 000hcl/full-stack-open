import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({lat, lon}) => {
    const [weather, setWeather] = useState('')
    useEffect(()=>{
        console.log('confirmation')
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(response=>{
            setWeather(response.data)
          })
    },[]
    )
    if(weather === ''){
        return <p>Loading...</p>

    }
    const temp = Math.round((weather.main.temp -273.15) * 100)/100
    const icon = weather.weather[0].icon
    const wind = weather.wind.speed
    

    
    return(
        <>
        <p>Temperature: {temp} Celsius</p>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
        <p> Wind: {wind} m/s</p>
        </>
        
    )
}
export default Weather