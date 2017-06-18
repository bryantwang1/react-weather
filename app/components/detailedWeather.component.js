import React from 'react';
import Moment from 'moment-timezone';

class DetailedWeather extends React.Component {

  render() {
    let date = Moment.tz(parseInt(this.props.data.time + '000'), this.props.data.timezone).day();
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let day = days[date];
    return (
      <div className="detailed-weather">
        <h2>{day}</h2>
        <h3>{this.props.data.summary}</h3>
        <h3>{this.props.data.temperature}</h3>
      </div>
    );
  }

}

export default DetailedWeather
