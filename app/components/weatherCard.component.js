import React from 'react';
import Moment from 'moment-timezone';

class WeatherCard extends React.Component {

  render() {
    let date = Moment.tz(parseInt(this.props.time + '000'), this.props.timezone).day();
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let day = days[date];

    let divStyle = { borderTop: '10px solid', borderTopColor: 'Beige' };
    let icons = ['clear-day', 'clear-night', 'partly-cloudy-day', 'partly-cloudy-night', 'cloudy', 'rain', 'sleet', 'snow', 'wind', 'fog'];
    let iconColors = ['Yellow', 'Yellow', 'LightSteelBlue', 'LightSteelBlue', 'Black', 'DodgerBlue', 'DodgerBlue', 'DodgerBlue', 'Plum', 'LightSlateGray'];
    let iconIndex = icons.indexOf(this.props.icon);
    if(iconIndex >= 0) {
      divStyle.borderTopColor = iconColors[iconIndex];
    } else {
      divStyle.borderTopColor = 'Beige';
    }

    let slideNumber = this.props.slideNumber.toString();
    return (
      <div className="weather-card" data-target="#weatherCarousel" data-slide-to={slideNumber} style={divStyle}>
        <h3>{day}</h3>
        <h4>{this.props.tempHigh}/{this.props.tempLow} °F</h4>
        <h5>{this.props.summary}</h5>
      </div>
    );
  }

}

export default WeatherCard
