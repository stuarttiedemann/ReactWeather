var React = require('react');

// A Stateless functional Component only works on components that don't maintain state

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a simple weather application built with React.  I am currently learning React and this is one of my first projects.</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react" target="blank">React</a> - This is the JavaScript framework used.
        </li>
        <li>
          <a href="https://foundation.zurb.com" target="blank">Foundation</a> - This is the CSS library used.
        </li>
        <li>
          <a href="http://openweathermap.org" target="blank">Open Weather Map</a> - I used the Open Weather API to search for weather data by city name.
        </li>
        <li>
          <a href="https://github.com/stuarttiedemann/ReactWeather" target="blank">Github Page</a> - My ReactWeather repository on github
        </li>
      </ul>
    </div>
  )
};

module.exports = About;