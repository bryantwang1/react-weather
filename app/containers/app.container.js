import React from 'react';
import Axios from 'axios';

import WeatherCardGroup from '../components/weatherCardGroup.component';
import DetailedWeatherGroup from '../components/detailedWeatherGroup.component';

class AppContainer extends React.Component {

  constructor(props) {
    super(props);

    this.client_id = apiKey;

    this.state = {
      currently: {},
      daily: []
    };
  }

  getForecast(latitude, longitude) {
    let _this = this;

    Axios.get(`https://api.darksky.net/forecast/${this.client_id}/${latitude},${longitude}`)
      .then(response => {
        console.log(response);
        _this.setState({
          timezone: response.data.timezone,
          currently: response.data.currently,
          daily: response.data.daily
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getForecast(42.3601, -71.0589);
  }

  render() {
    return (
      <div className="wang-weather">
        <DetailedWeatherGroup
          currently={this.state.currently}
          daily={this.state.daily}
        />
        <WeatherCardGroup
          daily={this.state.daily}
          timezone={this.state.timezone}
        />
      </div>
    );
  }

}

export default AppContainer
