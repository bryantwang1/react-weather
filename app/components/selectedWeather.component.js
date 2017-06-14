import React from 'react';

class SelectedWeather extends React.Component {

  render() {
    return (
      <div className="selected-weather">
        <h1>{this.props.currently.summary}</h1>
        <h3>{this.props.currently.temperature}</h3>
      </div>
    );
  }

}

export default SelectedWeather
