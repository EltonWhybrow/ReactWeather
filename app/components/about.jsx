var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h1>About Component!</h1>
//     )
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1>About</h1>
      <p>Welcome to the about page</p>
    </div>
  )
};

module.exports = About;
