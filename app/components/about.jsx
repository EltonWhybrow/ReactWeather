var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Weather application build for the purpose of gaining a better understanding of React for the bootcamp</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
        </li>
        <li>
          <a href="http://openweatehrmap.org">Open Weather Map</a> - This was the open source weather API used in this example.
        </li>
        <li>
          <a href="https://eltonwhybrow.github.io/">Angular2 - Recipe book app</a> - This was the Angular 2 app created and pushed github pages in my other tutorial.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
