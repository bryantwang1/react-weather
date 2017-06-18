import React from 'react';

import WeatherCard from './weatherCard.component';

class WeatherCardGroup extends React.Component {

  render() {
    let weatherData = this.props.daily.data;
    let weatherCards = [];
    if (typeof weatherData != 'undefined') {
      weatherCards = weatherData.map(day => {
        return (
          <WeatherCard
            key={day.time}
            time={day.time}
            summary={day.summary}
            tempHigh={day.temperatureMax}
            tempLow={day.temperatureMin}
            timezone={this.props.timezone}
          />
        );
      });
    }
    return (
      <div className="weather-card-group">
        <h2>7 Day summary: </h2>
        <h4>{this.props.daily.summary}</h4>
        <hr />
        {weatherCards}
      </div>
    );
  }

}

export default WeatherCardGroup
