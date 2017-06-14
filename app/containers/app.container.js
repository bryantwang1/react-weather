import React from 'react';
import Axios from 'axios';

import WeatherCardGroup from '../components/weatherCardGroup.component.js';
import SelectedWeather from '../components/selectedWeather.component.js';

class AppContainer extends React.Component {

  constructor(props) {
    super(props);

    this.client_id = apiKey;

    this.state = {
      weather: []
    };
  }

  getForecast(latitude, longitude) {
    Axios.get(`https://api.darksky.net/forecast/${this.client_id}/${latitude},${longitude}`)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      });
  }

  componentDidMount() {
    this.getForecast(42.3601, -71.0589);
  }

  render() {
    return (
      <div className="wang-weather">

      </div>
    );
  }

}

export default AppContainer
