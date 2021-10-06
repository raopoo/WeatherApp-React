import { useState, useEffect } from "react"
import axios from 'axios'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

function App() {
  const [search, setSearch] = useState("")
  const [weatherData, setWeatherData] = useState({})
  console.log(process.env.REACT_APP_WEATHER_API)
   useEffect(() => {
  
   }, [])

  const fetchData = async () => {
      // TODO: handle errors in seach more gracefully
      const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_WEATHER_API}&units=metric&q=${search}`)
      if (data.weather) setWeatherData(data)
    }

  return (
    <div className="App">
      <header></header>
      <main>
        <div>
        <TextField id="outlined-basic" label="City" variant="outlined" value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button variant="outlined" onClick={fetchData}>Search</Button>
        </div>
        
        {weatherData.weather && (
          <>
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
} alt={weatherData.weather[0].description} />
          <h1>{weatherData.main.temp}°C</h1>
             <h2>
              {weatherData.name}, {weatherData.sys.country}
            </h2>
          </>
        )}
        {/* <Icon />
        <CurrentTemp />
        <div className="flex">
          <MinTemp />
          <MaxTemp />
        </div> */}
      </main>
    </div>
  )
}

export default App
