import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function WeatherForecastDay(props) {
  function temperatureMax() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }
  function temperatureMin() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let day = date.getDay();
    return days[day];
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">{day()}</div>
          <div className="forecast-icon">
            <WeatherIcon code={props.data.weather[0].icon} size={50} />
          </div>
          <div className="Forecast-temperature">
            <span className="Forecast-temperature-min">{temperatureMax()}</span>
            <span className="Forecast-temperature-max">{temperatureMin()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
