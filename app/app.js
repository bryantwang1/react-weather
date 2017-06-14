import React from 'react';
import ReactDOM from 'react-dom';

import WeatherCardGroup from './components/weatherCardGroup.component.js';
import SelectedWeather from './components/selectedWeather.component.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <SelectedWeather />
        <WeatherCardGroup />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
