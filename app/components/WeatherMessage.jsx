var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <p>The temperature in {location} is: {temp}</p>
  );
}

module.exports = WeatherMessage;