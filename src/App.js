import { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import styled from 'styled-components';
import WeatherBlock from './Components/WeatherBlock/weatherBlock'
import { WeatherBlockContainer, WeatherBanner } from './Components/UI/styled';
import WeatherForm from './Components/WeatherForm/weatherForm';

function App() {

  // States
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState({ 
    lat: '32.78624495925616', 
    lon: '-97.10435459361379',
    zip: '76006',
    name: 'Arlington'
  });

  // Get Daily Location Data
  const getWeather = () => {
    Axios.get('https://api.openweathermap.org/data/2.5/onecall', {
      params: {
        lat: location.lat,
        lon: location.lon,
        exclude: 'current,minutely,hourly,alerts',
        units: "imperial",
        appid: process.env.REACT_APP_WEATHER_API_KEY
      }
    }).then(
      (response) => {
        // Update Weather Object
        setWeather(response.data.daily);
    });
  }

  // Grabs data from child component and updates state with updated location data
  const handleZipCodeUpdate = (locationData) => {

    // Update state
    setLocation((prevLocation) => {
      return {
        ...prevLocation,
        lat: locationData.lat,
        lon: locationData.lon,
        zip: locationData.zip,
        name: locationData.name
      };
    });
  }

  // Inital API call to get weather forcast, and recall function on location update
  useEffect(() => {
    getWeather();
  }, [location]);

  return (
    <Div>
      <WeatherBanner>
        <div>
          <h2>{location.name}<br/> 5 Day Forcast</h2>
          <span><em>* Temperature in fahrenheit</em></span>
        </div>
        <WeatherForm updateZipCode={handleZipCodeUpdate}/>
      </WeatherBanner>
      <WeatherBlockContainer>
        {weather.slice(0, 5).map((dailyWeather) => (
          <WeatherBlock 
            key={Math.random()}
            weatherData={dailyWeather}>
          </WeatherBlock>
        ))}
      </WeatherBlockContainer>
    </Div>
  )
};

// Styles
const Div = styled.div`
  background-color: #fff;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1500px;
  margin-bottom: 50px;
`

export default App;