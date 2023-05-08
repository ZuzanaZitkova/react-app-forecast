import React from 'react';
import './Weather.css';

export default function Weather() {
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
        <h1>Christchuch</h1>

        <ul>
          <li>Wednesday 7:00</li>
          <li>Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="picture-cloudy-weather"
                className="float-left"
              />
              <span className="float-left">
                <span className="temperature">6</span>
                <span className="unit">°C</span>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precitipation: 15%</li>
              <li>Humidity:72%</li>
              <li>Wind:13 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
