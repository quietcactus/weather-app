import React from 'react';
import { SingleWeatherBlock } from '../UI/styled';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const WeatherBlock = (props) => {

  const date = new Date(props.weatherData.dt * 1000);
  const month = date.toLocaleString('default', { month: 'long' });
  const dateNumber = date.getDate();

  return (
    <SingleWeatherBlock>
      <h2>{month}<span>{dateNumber}</span></h2>
      <img src={`http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`} alt="" />
      <div className='flex-temperatures'>
        <p><i className='fa fa-caret-up'><span className='visually-hidden'>Daily High Temperature</span></i>{Math.round(props.weatherData.temp.max)}&#176;</p> 
        <p><i className='fa fa-caret-down'><span className='visually-hidden'>Daily Low Temperature</span></i>{Math.round(props.weatherData.temp.min)}&#176;</p> 
        <p><i className='fa fa-tint'><span className='visually-hidden'>Daily precipitation Chance</span></i>{Math.round(props.weatherData.pop)}%</p> 
      </div>
    </SingleWeatherBlock>
  );
}

export default WeatherBlock;