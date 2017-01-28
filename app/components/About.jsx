var React = require('react');

// A Stateless functional Component only works on components that don't maintain state

var About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>Welcome to the About page</p>
    </div>
  )
};

module.exports = About;