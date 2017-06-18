import React from 'react';
import Moment from 'moment-timezone';

class DetailedWeather extends React.Component {

  render() {
    let date = Moment.tz(parseInt(this.props.data.time + '000'), this.props.data.timezone).day();
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let day = days[date];

    let tempMaxTime = Moment(parseInt(this.props.data.temperatureMaxTime + '000')).format('h:mm:ss a');
    let tempMinTime = Moment(parseInt(this.props.data.temperatureMinTime + '000')).format('h:mm:ss a');
    return (
      <div className="detailed-weather">
        <h2>{day}</h2>
        <h3>{this.props.data.summary}</h3>
        <h3>High: {this.props.data.temperatureMax} at {tempMaxTime}</h3>
        <h3>Low: {this.props.data.temperatureMin} at {tempMinTime}</h3>
        <h3>{this.props.data.precipProbability * 100}% chance of Precipation</h3>
        <h4>UV Index: {this.props.data.uvIndex}</h4>
        <h4>Humidity: {Math.floor(this.props.data.humidity * 100)}%</h4>
        <h4>Wind Speed: {this.props.data.windSpeed} mph</h4>
        <h4>Wind Gust: {this.props.data.windGust} mph</h4>
        <h4>Cloud Cover: {Math.floor(this.props.data.cloudCover * 100)}%</h4>
      </div>
    );
  }

}

export default DetailedWeather
