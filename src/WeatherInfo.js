import React from 'react';
import FormatDate from './FormatDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo   ">
      <h1>{props.data.city}</h1>

      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <span className="clearfix float-left">
            <WeatherIcon code={props.data.icon} />
            <span>
              <WeatherTemperature celsius={props.data.temperature} />
            </span>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
