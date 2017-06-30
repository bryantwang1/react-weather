import React from 'react';
import HourlyWeather from './hourlyWeather.component';
import HourlyAnimation from './hourlyAnimation.component';

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
      <div className="carousel-item active">
        <div className="hourly-weather-group col-12">
          <HourlyAnimation data={weatherData} />
          <div className="row">
            {hourlyWeathers}
          </div>
        </div>
      </div>
    );
  }

}

export default HourlyWeatherGroup
