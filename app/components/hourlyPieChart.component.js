import React from 'react';

class HourlyPieChart extends React.Component {

  fillGap(counter, rightSlices, leftSlices) {
    if(this.props.data.length < 25) {
      for(let idx = 0; idx < (25 - this.props.data.length); idx++) {
        let divStyle = { backgroundColor: 'Beige', transform: 'rotate(0deg)' };

        let rotation = 0;
        rotation = counter * 15;
        divStyle.transform = `rotate(${rotation}deg)`;

        let reactElement = <div className="pie-slice" key={idx} style={divStyle}></div>;

        if(counter <= 11) {
          rightSlices.push(reactElement);
        } else {
          leftSlices.push(reactElement);
        }
        counter++;
      }
    }
    return counter;
  }

  render() {
    let rightSlices = [];
    let leftSlices = [];

    if(typeof this.props.data !== 'undefined') {
      let counter = 0;

      if(this.props.day === 1) {
        counter = this.fillGap(counter, rightSlices, leftSlices);
      }

      for(let hour of this.props.data) {
        if(typeof hour !== 'string') {
          let divStyle = { backgroundColor: 'Beige', transform: 'rotate(0deg)' };

          let icons = ['clear-day', 'clear-night', 'partly-cloudy-day', 'partly-cloudy-night', 'cloudy', 'rain', 'sleet', 'snow', 'wind', 'fog'];
          let iconColors = ['Yellow', 'Yellow', 'LightSteelBlue', 'LightSteelBlue', 'Black', 'DodgerBlue', 'DodgerBlue', 'DodgerBlue', 'Plum', 'LightSlateGray'];
          let iconIndex = icons.indexOf(hour.icon);
          if(iconIndex >= 0) {
            divStyle.backgroundColor = iconColors[iconIndex];
          } else {
            divStyle.backgroundColor = 'Beige';
          }

          let rotation = 0;
          rotation = counter * 15;
          divStyle.transform = `rotate(${rotation}deg)`;

          let reactElement = <div className="pie-slice" key={hour.time} style={divStyle}></div>;
          if(counter <= 11) {
            rightSlices.push(reactElement);
          } else {
            leftSlices.push(reactElement);
          }
          counter++;
        }
      }

      if(this.props.day === 3) {
        counter = this.fillGap(counter, rightSlices, leftSlices);
      }
    }

    return(
        <div className="col">
          <div className="pie-wrapper">

            <div className="pie-chart">
              <div className="pie-half">
                {rightSlices}
              </div>
              <div className="pie-half">
                {leftSlices}
              </div>
            </div>

            <div className="pie-time">12 AM</div>
            <div className="pie-time">6 AM</div>
            <div className="pie-time">12 PM</div>
            <div className="pie-time">6 PM</div>

          </div>
        </div>
    );
  }

}

export default HourlyPieChart
