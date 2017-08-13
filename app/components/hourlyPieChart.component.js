import React from 'react';

class HourlyPieChart extends React.Component {

  fillGap(counter, rightSlices, leftSlices) {
    if(this.props.data.length < 25) {
      for(let idx = 0; idx < (25 - this.props.data.length); idx++) {
        let divStyle = { backgroundColor: 'Beige', transform: 'rotate(0deg)' };

        let rotation = counter * 15;
        divStyle.transform = `rotate(${rotation}deg)`;

        let reactElement = <div className="pie-slice" key={idx} style={divStyle}></div>;

        if(counter <= 11) {
          rightSlices[0].push(reactElement);
          rightSlices[1].push(reactElement);
        } else {
          leftSlices[0].push(reactElement);
          leftSlices[1].push(reactElement);
        }
        counter++;
      }
    }
    return counter;
  }

  render() {
    let rightSlices = [[], []];
    let leftSlices = [[], []];

    if(typeof this.props.data !== 'undefined') {
      let counter = 0;

      if(this.props.day === 1) {
        counter = this.fillGap(counter, rightSlices, leftSlices);
      }

      for(let hour of this.props.data) {
        if(typeof hour !== 'string') {
          let divStyle1 = { backgroundColor: 'Beige', transform: 'rotate(0deg)' };
          let divStyle2 = { backgroundColor: 'Beige', transform: 'rotate(0deg)' };

          let icons = ['clear-day', 'clear-night', 'partly-cloudy-day', 'partly-cloudy-night', 'cloudy', 'rain', 'sleet', 'snow', 'wind', 'fog'];
          let iconColors = ['Yellow', 'Yellow', 'LightSteelBlue', 'LightSteelBlue', 'Black', 'DodgerBlue', 'DodgerBlue', 'DodgerBlue', 'Plum', 'LightSlateGray'];
          let iconIndex = icons.indexOf(hour.icon);
          if(iconIndex >= 0) {
            divStyle1.backgroundColor = iconColors[iconIndex];
          } else {
            divStyle1.backgroundColor = 'Beige';
          }

          let rotation = counter * 15;
          divStyle1.transform = `rotate(${rotation}deg)`;
          divStyle2.transform = `rotate(${rotation}deg)`;

          let borderTemp;
          if(hour.temperature > 100) {
            borderTemp = 1;
          } else if (hour.temperature < 25) {
            borderTemp = .01;
          } else {
            borderTemp = (Math.floor(hour.temperature - 24) / 100) * 1.25;
          }

          let borderRed = Math.floor(255 * borderTemp);
          let borderGreenInit = Math.floor(100 * (2 - 2 * borderTemp));
          let borderGreen = borderGreenInit < 0 ? -borderGreenInit : borderGreenInit;
          let borderBlue = Math.floor(255 * (1 - borderTemp));

          // console.log(`temp: ${hour.temperature}, borderRed: ${borderRed}, borderGreen: ${borderGreen}, borderBlue: ${borderBlue}`);
          divStyle2.backgroundColor = `rgb(${borderRed}, ${borderGreen}, ${borderBlue})`;

          let reactElement1 = <div className="pie-slice" key={hour.time} style={divStyle1}></div>;
          let reactElement2 = <div className="pie-slice" key={hour.time} style={divStyle2}></div>;
          if(counter <= 11) {
            rightSlices[0].push(reactElement1);
            rightSlices[1].push(reactElement2);
          } else {
            leftSlices[0].push(reactElement1);
            leftSlices[1].push(reactElement2);
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
                {rightSlices[0]}
              </div>
              <div className="pie-half">
                {leftSlices[0]}
              </div>
            </div>

            <div className="pie-chart">
              <div className="pie-half">
                {rightSlices[1]}
              </div>
              <div className="pie-half">
                {leftSlices[1]}
              </div>
            </div>

            <div className="pie-time">12 PM</div>
            <div className="pie-time">6 PM</div>
            <div className="pie-time">12 AM</div>
            <div className="pie-time">6 AM</div>

          </div>
        </div>
    );
  }

}

export default HourlyPieChart
