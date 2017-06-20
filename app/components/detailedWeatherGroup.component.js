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
        <div id="weatherCarousel" className="carousel slide" data-ride="carousel" data-interval="false">
          <div className="carousel-inner" role="listbox">
            <HourlyWeatherGroup
              hourly={this.props.hourly}
            />
            {detailedWeathers}
          </div>
          <a className="carousel-control-prev" href="#weatherCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#weatherCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }

}

export default DetailedWeatherGroup
