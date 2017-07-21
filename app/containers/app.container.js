import React from 'react';
import Axios from 'axios';

import WeatherCardGroup from '../components/weatherCardGroup.component';
import DetailedWeatherGroup from '../components/detailedWeatherGroup.component';

class AppContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currently: {},
      daily: [],
      hourly: []
    };
  }

  getForecast(latitude, longitude) {
    let _this = this;

    Axios.get(`https://f06yn0mele.execute-api.us-east-2.amazonaws.com/prod/GetWeather?longitude=${longitude}&latitude=${latitude}`)
      .then(response => {
        console.log(response);
        _this.setState({
          timezone: response.data.timezone,
          currently: response.data.currently,
          daily: response.data.daily,
          hourly: response.data.hourly
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getForecast(45.517303, -122.691803);
  }

  render() {
    return (
      <div className="wang-weather">
        <div className="container">
          <div className="row">
            <DetailedWeatherGroup
              currently={this.state.currently}
              daily={this.state.daily}
              hourly={this.state.hourly}
            />
            <WeatherCardGroup
              daily={this.state.daily}
              timezone={this.state.timezone}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default AppContainer
