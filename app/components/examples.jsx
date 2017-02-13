var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are few example locations to try out!</p>
      <lo>
        <li>
          <Link to='/?location=London'>London, England</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio ,Brazil</Link>
        </li>
      </lo>
    </div>
  )
};

module.exports = Examples;
