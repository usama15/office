import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
       dataLabels: {
           enabled: false
       },
         stroke: {
           colors: ['rgba(0,0,0,0)']
         },
        colors: ["#3b06fb","#947ef7", "#7ee5e5","#4d8af0","#fb0637"],
        legend: {
           position: 'top',
          horizontalAlign: 'center'
        },
      },
    series: [44, 55, 13, 33,]
      // labels: ['A', 'B', 'C', 'D', 'E']
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart  options={this.state.options} series={this.state.series} type="donut" width="100%" />
      </div>
    );
  }
}

export default Donut;
