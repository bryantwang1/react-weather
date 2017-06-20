import React from 'react';
import Moment from 'moment-timezone';

class HourlyWeather extends React.Component {

  render() {
    let dataTime = Moment(parseInt(this.props.data.time + '000'));
    let dateOnly = dataTime.format('MMMM Do');
    let timeOnly = dataTime.format('h:mm:ss a');
    if(typeof this.props.data != 'undefined') {
      let date = Moment(parseInt(this.props.data.time + '000')).day();
      let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      let day = days[date];

      let tempMaxTime = Moment(parseInt(this.props.data.temperatureMaxTime + '000')).format('h:mm:ss a');
      let tempMinTime = Moment(parseInt(this.props.data.temperatureMinTime + '000')).format('h:mm:ss a');
      return (
        <div className="hourly-weather">
          <div className="day-date">
            <h3>{day}, {dateOnly}</h3>
            <h3>{timeOnly}</h3>
          </div>
          <h3>Temp: {this.props.data.temperature} degrees</h3>
          <h4>Feels like: {this.props.data.apparentTemperature} degrees</h4>
          <h3>{Math.floor(this.props.data.precipProbability * 100)}% chance of Precipation</h3>
          <h4>Humidity: {Math.floor(this.props.data.humidity * 100)}%</h4>
          <h4>Wind Speed: {this.props.data.windSpeed} mph</h4>
          <h4>Wind Gust: {this.props.data.windGust} mph</h4>
        </div>
      );
    } else {
      return (
        <div className="hourly-weather"></div>
      );
    }
  }

}

export default HourlyWeather
