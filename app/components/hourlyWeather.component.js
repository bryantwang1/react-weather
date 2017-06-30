import React from 'react';
import Moment from 'moment-timezone';

class HourlyWeather extends React.Component {

  render() {
    let dataTime = Moment(parseInt(this.props.data.time + '000'));
    let dateOnly = dataTime.format('MMMM Do');
    let timeOnly = dataTime.format('h:mm:ss a');

    if(typeof this.props.data != 'undefined') {
      let date = Moment(parseInt(this.props.data.time + '000')).day();
      let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      let day = days[date];

      let tempMaxTime = Moment(parseInt(this.props.data.temperatureMaxTime + '000')).format('h:mm:ss a');
      let tempMinTime = Moment(parseInt(this.props.data.temperatureMinTime + '000')).format('h:mm:ss a');

      let divStyle = { borderLeft: '10px solid', borderLeftColor: 'Beige', borderRight: '10px solid', borderRightColor: 'Gray' };

      let icons = ['clear-day', 'clear-night', 'partly-cloudy-day', 'partly-cloudy-night', 'cloudy', 'rain', 'sleet', 'snow', 'wind', 'fog'];
      let iconColors = ['Yellow', 'Yellow', 'LightSteelBlue', 'LightSteelBlue', 'Black', 'DodgerBlue', 'DodgerBlue', 'DodgerBlue', 'Plum', 'LightSlateGray'];
      let iconIndex = icons.indexOf(this.props.data.icon);
      if(iconIndex >= 0) {
        divStyle.borderLeftColor = iconColors[iconIndex];
      } else {
        divStyle.borderLeftColor = 'Beige';
      }

      let borderTemp;
      if(this.props.data.temperature > 100) {
        borderTemp = 1;
      } else if (this.props.data.temperature < 25) {
        borderTemp = .01;
      } else {
        borderTemp = (Math.floor(this.props.data.temperature - 24) / 100) * 1.25;
      }

      let borderRed = Math.floor(255 * borderTemp);
      let borderGreenInit = Math.floor(100 * (2 - 2 * borderTemp));
      let borderGreen = borderGreenInit < 0 ? -borderGreenInit : borderGreenInit;
      let borderBlue = Math.floor(255 * (1 - borderTemp));

      // console.log(`temp: ${this.props.data.temperature}, borderRed: ${borderRed}, borderGreen: ${borderGreen}, borderBlue: ${borderBlue}`);
      divStyle.borderRightColor = `rgb(${borderRed}, ${borderGreen}, ${borderBlue})`;

      return (
        <div className="hourly-weather" style={divStyle}>
          <div className="day-date">
            <div className="row">
              <div className="col-6 time-col">
                <h1>{timeOnly}</h1>
              </div>
              <div className="col-6">
                <h1>{day}, {dateOnly}</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h2>{this.props.data.summary}</h2>
              <h2>Temp: {this.props.data.temperature}°F</h2>
              <h2>Feels like: {this.props.data.apparentTemperature}°F</h2>
            </div>
            <div className="col-6 sub-details">
              <h4>Precipation: {Math.floor(this.props.data.precipProbability * 100)}% chance</h4>
              <h4>Humidity: {Math.floor(this.props.data.humidity * 100)}%</h4>
              <h4>Wind Speed: {this.props.data.windSpeed} mph</h4>
              <h4>Wind Gust: {this.props.data.windGust} mph</h4>
            </div>
          </div>
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
