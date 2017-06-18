import React from 'react';
import CurrentWeather from './currentWeather.component';
import DetailedWeather from './detailedWeather.component';

class DetailedWeatherGroup extends React.Component {

  render() {
    let weatherData = this.props.daily.data;
    let todayDaily;
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
      todayDaily = detailedWeathers[0].props.data;
      detailedWeathers.splice(0, 1);
    }
    return (
      <div className="detailed-weather-group">
        <CurrentWeather
          currently={this.props.currently}
          daily={todayDaily}
        />
        {detailedWeathers}
      </div>
    );
  }

}

export default DetailedWeatherGroup
