import React from 'react';
import Moment from 'moment-timezone';

class WeatherCard extends React.Component {

  render() {
    let date = Moment.tz(parseInt(this.props.time + '000'), this.props.timezone).day();
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let day = days[date];
    return (
      <div className="weather-card">
        <h3>Weather Card</h3>
        <h3>{day}</h3>
        <h4>{this.props.tempHigh}/{this.props.tempLow}</h4>
        <h5>Summary: {this.props.summary}</h5>
      </div>
    );
  }

}

export default WeatherCard
