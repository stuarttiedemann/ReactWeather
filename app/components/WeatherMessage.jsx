var React = require('react');

var WeatherMessage = (props) => {
  var {temp, location} = props;
  return (
    <p>The temperature in {location} is: {temp}.</p>
  );
}

module.exports = WeatherMessage;