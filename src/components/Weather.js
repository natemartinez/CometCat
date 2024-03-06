import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
const images = require.context('../../public/images', true);

function Weather() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
 
  const [curCondition, setCondition] = useState(null);
  const [curIcon, setCurIcon] = useState(null);
  const [hourly, setHourly] = useState(null);
  const [weekly, setWeekly] = useState(null);
 // use hourly.map / weekly.map to display the upcoming data
 // I also need to check if it's nighttime or daytime

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    let api = 'http://api.weatherapi.com/v1/forecast.json?key=7f9751cf98a049dd805170718232803&q='+ latitude + ',' + longitude +
     '&days=4&aqi=no&alerts=yes';
     axios.get(api)
     .then(response => {
       setWeather(response.data);
     })
     .catch(error => console.log(error));
  }; 
  const error = () => {
    console.log("Unable to retrieve your location");
  };

  // need a function to go inside weather_conditions.json to find
  // what icons to use
  const checkLocation = () => {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
    console.log("Found Location");
  } else {
    console.log("Geolocation not supported");
  }
  }
  
  const checkWeather = (data) => {
    console.log(data.current.condition);
    // set curIcon with data.current.condition

  };
  
  useEffect(() => {
    checkLocation();
  }, []);
  
  useEffect(() => {
    checkWeather(weather)
  }, [weather])

  return (
    <div>
    {location && !weather ? <p>Loading weather data...</p> : null}
    {weather ? (
      <div className='cur-weather-box'>
    
        <h3>{weather.current.temp_f}</h3>
        <h3>{weather.location.name}, {weather.location.region}</h3>
      </div>
    ) : null}
  </div>
  );
}

export default Weather;
  