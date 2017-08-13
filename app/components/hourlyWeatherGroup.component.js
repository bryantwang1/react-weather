import React from 'react';
import Moment from 'moment-timezone';
import HourlyWeather from './hourlyWeather.component';
import HourlyAnimation from './hourlyAnimation.component';
import HourlyPieCharts from './hourlyPieCharts.component';

class HourlyWeatherGroup extends React.Component {

  render() {
    let weatherData = this.props.hourly.data;
    let dataByDay = [[], [], []];
    let hourlyWeathers = [];
    if (typeof weatherData != 'undefined') {
      let dataIndex = -1;
      let prevHourDay = -1;
      let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      for(let hour of weatherData) {
        let hourDay = Moment(parseInt(hour.time + '000')).day();

        if(hourDay !== prevHourDay) {
          dataIndex++;
          prevHourDay = hourDay;
          dataByDay[dataIndex].push(days[hourDay]);
        }

        dataByDay[dataIndex].push(hour);
      }

      for(let day of dataByDay) {
        let reactElement;
        for(let hour of day) {
          if(typeof hour === 'string') {
            reactElement = <h2 key={hour}>{hour}</h2>;
          } else {
            reactElement =
              <HourlyWeather
              key={hour.time}
              data={hour}
              />;
          }
          hourlyWeathers.push(reactElement);
        }
      }
    }
    return (
      <div className="carousel-item active">
        <div className="hourly-weather-group col-12">
          <HourlyAnimation data={weatherData} />
          <HourlyPieCharts data={dataByDay} />
          <div className="row">
            {hourlyWeathers}
          </div>
        </div>
      </div>
    );
  }

}

export default HourlyWeatherGroup
