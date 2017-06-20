import React from 'react';
import Moment from 'moment-timezone';

class DetailedWeather extends React.Component {

  render() {
    let dataTime;
    let timeDisplay = null;
    let tempDisplay = null;
    let data = null;

    let date = Moment.tz(parseInt(this.props.daily.time + '000'), this.props.daily.timezone).day();
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let day = days[date];

    let tempMaxTime = Moment(parseInt(this.props.daily.temperatureMaxTime + '000')).format('h:mm:ss a');
    let tempMinTime = Moment(parseInt(this.props.daily.temperatureMinTime + '000')).format('h:mm:ss a');

    if(this.props.currentWeather) {
      dataTime = Moment(parseInt(this.props.currently.time + '000')).format('MMMM Do YYYY, h:mm:ss a');
      data = this.props.currently;
      timeDisplay = <div className="day-date"><h2>Weather on {day}</h2><h4>{dataTime}</h4></div>;
      tempDisplay = <div className="temp-display">
        <h3>Currently {this.props.currently.temperature} degrees</h3>
        <h4>Feels like {this.props.currently.apparentTemperature} degrees</h4>
      </div>;
    } else {
      data = this.props.daily;
      timeDisplay = <div className="day-date"><h2>{day}</h2></div>;
      tempDisplay = <div className="temp-display">
        <h3>High: {this.props.daily.temperatureMax} at {tempMaxTime}</h3>
        <h3>Low: {this.props.daily.temperatureMin} at {tempMinTime}</h3>
      </div>;
    }

    return (
      <div className="carousel-item">
        <div className="detailed-weather">
          {timeDisplay}
          {tempDisplay}
          <h3>{data.summary}</h3>
          <h3>Precipation: {Math.floor(data.precipProbability * 100)}% chance</h3>
          <h4>Humidity: {Math.floor(data.humidity * 100)}%</h4>
          <h4>Cloud Cover: {Math.floor(data.cloudCover * 100)}%</h4>
          <h4>UV Index: {this.props.daily.uvIndex}</h4>
          <h4>Wind Speed: {this.props.daily.windSpeed} mph</h4>
          <h4>Wind Gust: {this.props.daily.windGust} mph</h4>
        </div>
      </div>
    );
  }

}

export default DetailedWeather
