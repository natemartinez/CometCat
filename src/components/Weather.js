import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Weather() {
 const [location, setLocation] = useState(null);
 const [weather, setWeather] = useState(null);


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("Geolocation not supported");
  }
  
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    let api = 'http://api.weatherapi.com/v1/forecast.json?key=7f9751cf98a049dd805170718232803&q='+ latitude + ',' + longitude +
     '&days=4&aqi=no&alerts=yes';

    axios.get(api)
    .then(response => {
      console.log(response.data);

    })

  }
  
  function error() {
    console.log("Unable to retrieve your location");
  }

  return (
    <div>
    {!location ? <button onClick={handleLocationClick}>Get Location</button> : null}
    {location && !weather ? <p>Loading weather data...</p> : null}
    {weather ? (
      <div>
        <p>Location: {weather.name}</p>
        <p>Temperature: {weather.main.temp} °C</p>
        <p>Weather: {weather.weather[0].description}</p>
      </div>
    ) : null}
  </div>
  );
}

export default Weather;
  