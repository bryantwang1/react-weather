import React from 'react';

import WeatherCard from './weatherCard.component';

class WeatherCardGroup extends React.Component {

  render() {
    let weatherData = this.props.daily.data;
    let weatherCards = [];
    if (typeof weatherData != 'undefined') {
      let counter = 0;
      weatherCards = weatherData.map(day => {
        counter++;
        return (
          <WeatherCard
            key={day.time}
            time={day.time}
            summary={day.summary}
            tempHigh={day.temperatureMax}
            tempLow={day.temperatureMin}
            timezone={this.props.timezone}
            icon={day.icon}
            slideNumber={counter}
          />
        );
      });
    }
    return (
      <div className="weather-card-group col-12">
        <div className="row">
          <h2>7 Day summary: </h2>
          <h4>{this.props.daily.summary}</h4>
          {weatherCards}
        </div>
      </div>
    );
  }

}

export default WeatherCardGroup
