import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Weather from './Weather';

function Main() {

  return (
      <div className="App">
        <Weather/>
        Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
        <h2>This is the main component</h2>
        <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"/></a>
      </div>
  );
}

export default Main;
  