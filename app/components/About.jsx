var React = require('react');
/*
var About = React.createClass({

  render: function(){
    return (
      <h2>About Component</h2>
    );
  }

});
*/
var About = (props) => {
  return (
    <div>
      <h2>About</h2>
      <h3>WelCome to About Page</h3>
    </div>
  );
};

module.exports = About;
