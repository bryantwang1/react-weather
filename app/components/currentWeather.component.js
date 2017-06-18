import React from 'react';
import Moment from 'moment-timezone';

class CurrentWeather extends React.Component {

  render() {
    let dataTime = Moment(parseInt(this.props.currently.time + '000')).format('MMMM Do YYYY, h:mm:ss a');
    if(typeof this.props.daily != 'undefined') {
      let date = Moment.tz(parseInt(this.props.daily.time + '000'), this.props.daily.timezone).day();
      let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      let day = days[date];

      let tempMaxTime = Moment(parseInt(this.props.daily.temperatureMaxTime + '000')).format('h:mm:ss a');
      let tempMinTime = Moment(parseInt(this.props.daily.temperatureMinTime + '000')).format('h:mm:ss a');
      return (
        <div className="current-weather">
          <div className="day-date">
            <h2>Weather on {day}</h2>
            <h4>{dataTime}</h4>
          </div>
          <h3>{this.props.currently.summary}</h3>
          <h3>Currently {this.props.currently.temperature} degrees</h3>
          <h4>Feels like {this.props.currently.apparentTemperature} degrees</h4>
          <h3>High: {this.props.daily.temperatureMax} at {tempMaxTime}</h3>
          <h3>Low: {this.props.daily.temperatureMin} at {tempMinTime}</h3>
          <h3>{this.props.daily.precipProbability * 100}% chance of Precipation</h3>
          <h4>UV Index: {this.props.daily.uvIndex}</h4>
          <h4>Humidity: {Math.floor(this.props.currently.humidity * 100)}%</h4>
          <h4>Wind Speed: {this.props.daily.windSpeed} mph</h4>
          <h4>Wind Gust: {this.props.daily.windGust} mph</h4>
          <h4>Cloud Cover: {Math.floor(this.props.currently.cloudCover * 100)}%</h4>
        </div>
      );
    } else {
      return (
        <div className="current-weather"></div>
      );
    }
  }

}

export default CurrentWeather
