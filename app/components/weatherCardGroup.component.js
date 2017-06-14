import React from 'react';

import WeatherCard from './weatherCard.component';

class WeatherCardGroup extends React.Component {

  render() {
    return (
      <div className="weather-card-group">
        <h2>7 Day summary: </h2>
        <h4>{this.props.daily.summary}</h4>
      </div>
    );
  }

}

export default WeatherCardGroup
