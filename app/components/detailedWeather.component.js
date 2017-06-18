import React from 'react';

class DetailedWeather extends React.Component {

  render() {
    return (
      <div className="detailed-weather">
        <h1>{this.props.currently.summary}</h1>
        <h3>{this.props.currently.temperature}</h3>
      </div>
    );
  }

}

export default DetailedWeather
