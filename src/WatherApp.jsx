import {useState} from 'react'
import './WeatherApp.css'

export const WatherApp = () => {

const [city , setCity  ] = useState('') 
const [weatherData, setWeatherData] = useState(null)

const urlB = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '4532fe7a3e73e89fd68be174240d2847'
const difKelvin = '273.15'  //Para pasarlo a grados C

const fetchWeather = async () => {
    try{
        const response = await fetch(`${urlB}?q=${city}&appid=${API_KEY}&lang=es`)
        const data = await response.json()
        console.log(data)
        setWeatherData(data)
    }catch(error){
        console.error('Ha habido un error:', error)
    }
}

const handleCityChange = (e) => {
    setCity(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    fetchWeather()
}

  return (
   <div className='container'>
            <h1> Aplicacion del clima  </h1>
            <form onSubmit={handleSubmit}>
                <input 
                type='text' 
                placeholder='Ingresa una ciudad' 
                value={city} 
                onChange={handleCityChange} />

                <button type='submit'> Buscar </button>
            </form>

            {weatherData && (

                        <div>
                            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                            <p>La temperatura actual es {Math.floor(weatherData.main.temp - difKelvin) } °C</p>
                            <p> La condicion meteorologica actual {weatherData.weather[0].description}</p>
                            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description}/>
                            
                        </div>
            )}
   </div>
  )
}
