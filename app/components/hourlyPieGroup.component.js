import React from 'react';
import HourlyPieChart from './hourlyPieChart.component';

class HourlyPieGroup extends React.Component {

  render() {
    return(
      <div className="hourly-pie-group">
        <div className="row">
          <HourlyPieChart data={this.props.data[0]} day={1} />
          <HourlyPieChart data={this.props.data[1]} day={2} />
          <HourlyPieChart data={this.props.data[2]} day={3} />
        </div>
      </div>
    );
  }

}

export default HourlyPieGroup
