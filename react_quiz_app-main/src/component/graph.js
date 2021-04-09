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
        },
        xaxis: {
          // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        },
        yaxis:{
          show: true,
          color: "rgba(0,0,0,0.06)",
          ticks: [
            [0, "-100%"],
            [10, "-75%"],
            [20, "-50%"],
            [30, "-25%"],
            [40, "0%"],
            [50, "+25%"],
            [60, "+50%"],
            [70, "+75%"],
            [80, "+100%"],
          ],
          // tickColor: CanvasGradient.apply(),
          min: 0,
          max: 80,
          font: {
            size: 11,
            weight: "600",
            // color: colors.muted,
          },
        }
      },
      series: [
        {
          // name: "series",
          // data: [30, 40, 45, 50, 49, 60, 70, 91]
        },

      ]
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
              type="line"
              width="500"
              height='300'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;
