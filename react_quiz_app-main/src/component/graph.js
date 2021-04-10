import React, { Component } from "react";
import Chart from "react-apexcharts";

class Graph extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "bar",
          type:'line',
          background: "linear-gradient(180deg, rgba(0, 255, 76,0.3) 10%, rgba(255, 0, 0,0.3) 100%)"
        },
        colors: ["#727cf5"],

        xaxis: {
          show:true,
          categories: ['1 Jan','   2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan'],
        // color: 'rgb(250,250,247)',
          // reserveSpace: false

         },
        yaxis:{
          show: true,
          color: 'rgb(255,255,252)',
          categories: ['1 Jan','   2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan'],


        },
         grid: {
      borderColor: "rgba(77, 138, 240, .1)",
         },
        stroke: {
            curve: 'smooth',
        },

      },
      series: [
        {
          name: "series",
          data: [50 , 35, 86, 52, 22, 46, 15, -10, 65],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              width="100%"
              height='450'
              // style={{color:'#E91E63' }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;
