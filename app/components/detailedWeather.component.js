import React from 'react';

class DetailedWeather extends React.Component {

  render() {
    return (
      let date = Moment.tz(parseInt(this.props.day.time + "000"), this.props.day.timezone).day();
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
      <div className="detailed-weather">
        <h2>{day}</h2>
        <h3>{this.props.day.summary}</h3>
        <h3>{this.props.day.temperature}</h3>
      </div>
    );
  }

}

export default DetailedWeather
