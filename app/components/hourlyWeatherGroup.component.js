import React from 'react';
import HourlyWeather from './hourlyWeather.component';

class HourlyWeatherGroup extends React.Component {

  render() {
    let weatherData = this.props.hourly.data;
    let hourlyWeathers = [];
    if (typeof weatherData != 'undefined') {
      hourlyWeathers = weatherData.map(hour => {
        return (
          <HourlyWeather
            key={hour.time}
            data={hour}
          />
        );
      });
    }
    return (
      <div className="hourly-weather-group">
        {hourlyWeathers}
      </div>
    );
  }

}

export default HourlyWeatherGroup
