import React, { useState } from 'react';
import axios from 'axios';
import FormatDate from './FormatDate';
import './Weather.css';

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: 'https://ssl.gstatic.com/onebox/weather/64/cloudy.png',
      wind: response.data.wind.speed,
      city: response.data.name
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city ..."
                  className="form-control"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <h1>{weatherData.city}</h1>

          <ul>
            <li>
              <FormatDate date={weatherData.date} />
            </li>
            <li>{weatherData.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src={weatherData.iconUrl}
                  alt="picture-cloudy-weather"
                  className="float-left"
                />
                <span className="float-left">
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit">°C</span>
                </span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity:{weatherData.humidity}%</li>
                <li>Wind:{weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = 'fda3688b1db05987dd5d07c237aecfba';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return 'Loading...';
  }
}
