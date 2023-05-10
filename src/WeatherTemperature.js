import React, { useState } from 'react';

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState('celsius');
  function showCelsius(event) {
    event.preventDefault();
    setUnit('celsius');
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit('fahrenheit');
  }
  let fahrenheit = (props.celsius * 9) / 5 + 32;

  if (unit === 'celsius') {
    return (
      <span className="WeatherTemperature">
        <span className="temperature mb-5">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{' '}
          <a href="#" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temperature mb-5">{Math.round(fahrenheit)}</span>
        <span className="unit">
          {' '}
          <a href="#" onClick={showCelsius}>
            °C{' '}
          </a>
          | °F
        </span>
      </span>
    );
  }
}
