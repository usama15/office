import React, {Component} from "react";
import Chart from 'react-apexcharts'
import DonutChart from '../component/Donut'

function ChartGraph (){
class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
          chart: {
              type: 'bar',
              height: '320',
              parentHeightOffset: 0
          },
          colors: ["#f77eb9"],
           grid: {
              borderColor: "rgba(77, 138, 240, .1)",
                padding: {
                  bottom: -15
                }
              },
       xaxis: {
              type: 'datetime',
           categories: ['01/01/1991','01/01/1992','01/01/1993','01/01/1994','01/01/1995','01/01/1996','01/01/1997', '01/01/1998','01/01/1999']
          }
      },
      series: [{
      name: 'sales',
      data: [30,40,45,50,49,60,70,91,125]
    }],
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
              type="bar"
                width="100%"
              height='300'
            />
          </div>
        </div>
      </div>
    );
  }
}

class LineBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
         chart: {
             height: 300,
             type: "line",
             parentHeightOffset: 0
         },
        colors: ["#727cf5", "#7ee5e5","#4d8af0"],
           grid: {
      borderColor: "rgba(77, 138, 240, .1)",
      padding: {
        bottom: -15
      }
    },
       xaxis: {
             type: "datetime",
           categories: ["2015", "2016", "2017", "2018"]
       },
          markers: {
             size: 0
          },
          stroke: {
             width: 3,
              curve: "smooth",
              lineCap: "round"
          },
           legend: {
             show: true,
               position: "top",
               horizontalAlign: 'left',
               containerMargin: {
                 top: 30
             }
             },
          responsive: [
      {
        breakpoint: 500,
        options: {
          legend: {
            fontSize: "11px"
          }
        }
      }
    ],

      },
     series: [
      {
        name: "Data a",
        data: [45, 52, 38, 45]
      },
      {
        name: "Data b",
        data: [12, 42, 68, 33]
      },
      {
        name:
          "Data c",
        data: [8, 32, 48, 53]
      }
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
              height='300'
              // style={{color:'#E91E63' }}
            />
          </div>
        </div>
      </div>
    );
  }
}
 function generateDayWiseTimeSeries(s, count) {
    var values = [[
      4,3,10,9,29,19,25,9,12,7,19,5,13,9,17,2,7,5
    ], [
      2,3,8,7,22,16,23,7,11,5,12,5,10,4,15,2,6,2
    ]];
    var i = 0;
    var series = [];
    var x = new Date("11 Nov 2012").getTime();
    while (i < count) {
      series.push([x, values[s][i]]);
      x += 86400000;
      i++;
    }
    return series;
  }
class AreaChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
         chart: {
      type: "area",
      height: 300,
      parentHeightOffset: 0,
      foreColor: "#999",
      stacked: true,
      dropShadow: {
        enabled: true,
        enabledSeries: [0],
        top: -2,
        left: 2,
        blur: 5,
        opacity: 0.06
      }
    },
    colors: ["#f77eb9", "#7ee5e5"],
           stroke: {
             curve: "smooth",
               width: 3
           },
           dataLabels: {
             enabled: false
           },
          grid: {
             borderColor: "rgba(77, 138, 240, .1)",
              padding: {
                 left: -5,
                  right: 5,
                  bottom: -1
             }
             },
           markers: {
             size: 0,
               strokeColor: "#fff",
                strokeWidth: 3,
                strokeOpacity: 1,
                fillOpacity: 1,
               hover: {
                 size: 6
             }
             },
        xaxis: {
             type: "datetime",
            axisBorder: {
                 show: false
            },
            axisTicks: {
                 show: false
             }
             },
          yaxis: {
      tickAmount: 4,
      min: 0,
      labels: {
        offsetX: 24,
        offsetY: -5
      },
      tooltip: {
      x: {
        format: "dd MMM yyyy"
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    },
    fill: {
      type: "solid",
      fillOpacity: 0.7
    }
    },
      },
     series: [{
      name: 'Total Views',
      data: generateDayWiseTimeSeries(0, 18)
    }, {
      name: 'Unique Views',
      data: generateDayWiseTimeSeries(1, 18)
    }],
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
              type="bar"
                width="100%"
              height='300'
            />
          </div>
        </div>
      </div>
    );
  }
}






    return(
        <div className='main' >
            <div className="row ">
                <div className="col-xl-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">Line chart</h6>
                      <LineBar />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">Bar chart</h6>
                      <BarChart/>
                    </div>
                  </div>
                </div>
              </div>

            <div className="row">
                <div className="col-xl-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">Area chart</h6>
                      <AreaChart/>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">Donut chart</h6>
                      <DonutChart style={{marginLeft:"300px"}}/>
                    </div>
                  </div>
                </div>
              </div>
             <div className="row ">
                <div className="col-xl-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">Line chart</h6>
                      <LineBar />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">Bar chart</h6>
                      <BarChart/>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    )
}

export default ChartGraph;
