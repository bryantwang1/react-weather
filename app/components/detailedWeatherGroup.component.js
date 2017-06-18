import React from 'react';
import CurrentWeather from './currentWeather.component';
import DetailedWeather from './detailedWeather.component';

class DetailedWeatherGroup extends React.Component {

  render() {
    let weatherData = this.props.daily.data;
    let detailedWeathers = [];
    if (typeof weatherData != 'undefined') {
      detailedWeathers = weatherData.map(day => {
        return (
          <DetailedWeather
            key={day.time}
            data={day}
          />
        );
      });
    }
    return (
      <div className="detailed-weather-group">
        {detailedWeathers}
      </div>
    );
  }

}

export default DetailedWeatherGroup
