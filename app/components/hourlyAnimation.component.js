import React from 'react';
import Moment from 'moment-timezone';
import $ from 'jquery';

class HourlyAnimation extends React.Component {

  randomRange(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  }

  makeItRain(dropNumber) {
    for(let i = 1; i < dropNumber ; i++) {
    let dropLeft = this.randomRange(0, 1600);
    let dropTop = this.randomRange(-2100, 500);

    $('#animation-precip').append(`<div class="drop" id="drop${i}"></div>`);
    $(`#drop${i}`).css('left', dropLeft);
    $(`#drop${i}`).css('top', dropTop);
    }
  }

  cycleInfo(temps) {
    let i = 0;
    function rotate() {
      $('#animation-info').text(temps[i])
      i++;
    }

    rotate();
    setInterval(rotate, 1000);
  }

  // componentDidMount() {
    // this.makeItRain(800);
  // }

  render() {
    let icons = [];
    let temps = [];
    let precips = [];
    let summaries = [];
    let humidities = [];
    let times = [];
    let days = [];

    if(typeof this.props.data != 'undefined') {
      for(let hour of this.props.data) {
        const dataTime = Moment(parseInt(hour.time + '000'));
        const timeOnly = dataTime.format('h:mm:ss a');

        const date = dataTime.day();
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const day = days[date];

        icons.push(hour.icon);
        temps.push(hour.temperature);
        precips.push(Math.floor(hour.precipProbability));
        summaries.push(hour.summary);
        humidities.push(hour.humidity);
        times.push(timeOnly);
        days.push(day);
      }
    }

    if(temps.length > 0) {
      this.cycleInfo(temps);
    }

    return(
      <div className="hourly-animation">
        <div id="animation-background">
          <div id="animation-info"></div>
          <div id="animation-sun"></div>
          <div id="cloud-container">
            <div className="animation-cloud" id="cloud-one">
              <div className="cloud-circle"></div>
              <div className="cloud-circle"></div>
              <div className="cloud-circle"></div>
            </div>
            <div className="animation-cloud" id="cloud-two">
              <div className="cloud-circle"></div>
              <div className="cloud-circle"></div>
              <div className="cloud-circle"></div>
            </div>
          </div>
          <div id="animation-precip"></div>
          <div id="animation-bird"></div>
        </div>
      </div>
    );
  }

}

export default HourlyAnimation
