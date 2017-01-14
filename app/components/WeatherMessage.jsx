var React = require('react');

/*
var WeatherMessage = React.createClass({

  render: function(){
    var {location, temp} = this.props;
    return (
      <h2>It is {temp} in {location}.</h2>
    );
  }

});
*/
var WeatherMessage = (props) => {
  var {location, temp} = props;
  return (
    <h3 className="text-center">It is {temp} in {location}.</h3>
  );
};

module.exports = WeatherMessage;
