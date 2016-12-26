var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  getInitialState: function(){
    /*
    return {
      location: 'Miami',
      temp: 88
    };
    */
    return{
      isLoading: false
    };
  },

  handleSearch: function(location){
    var that = this;
    /*
    this.setState({
      location: location,
      temp:23
    });
    */
    this.setState({isLoading: true});
    
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp:temp
      });
    }, function(errorMessage){
      alert(errorMessage);
    });

    this.setState({isLoading: false});
  },

  render: function(){
    //var location = this.state.location;
    //var temp = this.state.temp;
    var {isLoading, location, temp} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3>Loading Weather...</h3>;
      }else if(location && temp){
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h2>Weather Component</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }

});

module.exports = Weather;
