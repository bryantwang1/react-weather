import React from 'react';
import DetailedWeather from './detailedWeather.component';
import HourlyWeatherGroup from './hourlyWeatherGroup.component';

class DetailedWeatherGroup extends React.Component {

  render() {
    let weatherData = this.props.daily.data;
    let todayDaily;
    let detailedWeathers = [];
    let currentWeather = true;
    let firstInArray = true;
    if (typeof weatherData != 'undefined') {
      detailedWeathers = weatherData.map(day => {
        let currentData = null;
        if(!firstInArray) {
          currentWeather = false;
        } else {
          currentData = this.props.currently;
          firstInArray = false;
        }
        return (
          <DetailedWeather
            key={day.time}
            daily={day}
            currently={currentData}
            currentWeather={currentWeather}
          />
        );
      });
      todayDaily = detailedWeathers[0].props.data;
      //detailedWeathers.splice(0, 1);
    }
    return (
      <div className="detailed-weather-group col-12">
        <HourlyWeatherGroup
          hourly={this.props.hourly}
        />
        {detailedWeathers}
      </div>
    );
  }

}

export default DetailedWeatherGroup
