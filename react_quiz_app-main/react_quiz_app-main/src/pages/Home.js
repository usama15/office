import React from "react";
import i1 from '../assets/1.png'
import i2 from '../assets/2.png'
import i3 from '../assets/3.png'
import i4 from '../assets/5.png'
import i5 from '../assets/5.png'
import i6 from '../assets/6.png'
import i7 from '../assets/7.png'
import i8 from '../assets/8.png'
import i9 from '../assets/9.png'
import i10 from '../assets/10.png'
import ApexCharts from 'apexcharts'
import Graph from "../component/graph";
import '../App.css'
import { Chart, registerables } from 'chart.js';
import Donut from "../component/Donut";
// Chart.register(...registerables);
// import { Doughnut } from 'react-chartjs-2';

class Home extends React.Component {
    render() {
        return (
            <div className='main' >
                <div class="page-content">

                    <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin" >
                        <div>
                            <h4 class="mt-0 mb-md-0">Welcome to Dashboard</h4>
                        </div>

                    </div>


                    <div class="row" >
                        <div class="col-xl-3 grid-margin stretch-card" >
                            <div class="card" >
                                <div class="card-body">
                                    <h6 class="card-title " style={{ textAlign: "left" }}>Projects</h6>
                                    <div class="table-responsive">
                                        <table id="dataTableExample" class="table">
                                            <thead >
                                                <tr>
                                                    <th><p id="myfont">Ticker</p></th>
                                                    <th><p id="myfont" style={{ color: "yellow", width: "20px" }}>Hourly</p></th>
                                                    <th><p id="myfont" style={{ color: "yellow", width: "15px" }}>Daily</p></th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                <tr>
                                                    <td><span class="badge badge-danger">Released</span></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-danger">
                                                            <span >-2.8%</span>
                                                            <i data-feather="arrow-down" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-success">
                                                            <span>2.8%</span>
                                                            <i data-feather="arrow-up" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="badge badge-danger">Released</span></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-danger">
                                                            <span>-2.8%</span>
                                                            <i data-feather="arrow-down" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-success">
                                                            <span>2.8%</span>
                                                            <i data-feather="arrow-up" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="badge badge-danger">Released</span></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-danger">
                                                            <span>-2.8%</span>
                                                            <i data-feather="arrow-down" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-success">
                                                            <span>2.8%</span>
                                                            <i data-feather="arrow-up" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="badge badge-danger">Released</span></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-danger">
                                                            <span>-2.8%</span>
                                                            <i data-feather="arrow-down" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-success">
                                                            <span>2.8%</span>
                                                            <i data-feather="arrow-up" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="badge badge-danger">Released</span></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-danger">
                                                            <span>-2.8%</span>
                                                            <i data-feather="arrow-down" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-success">
                                                            <span>2.8%</span>
                                                            <i data-feather="arrow-up" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="badge badge-danger">Released</span></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-danger">
                                                            <span>-2.8%</span>
                                                            <i data-feather="arrow-down" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-success">
                                                            <span>2.8%</span>
                                                            <i data-feather="arrow-up" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="badge badge-danger">Released</span></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-danger">
                                                            <span>-2.8%</span>
                                                            <i data-feather="arrow-down" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-success">
                                                            <span>2.8%</span>
                                                            <i data-feather="arrow-up" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="badge badge-danger">Released</span></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-danger">
                                                            <span>-2.8%</span>
                                                            <i data-feather="arrow-down" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-success">
                                                            <span>2.8%</span>
                                                            <i data-feather="arrow-up" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="badge badge-danger">Released</span></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-danger">
                                                            <span>-2.8%</span>
                                                            <i data-feather="arrow-down" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-success">
                                                            <span>2.8%</span>
                                                            <i data-feather="arrow-up" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="badge badge-danger">Released</span></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-danger">
                                                            <span>-2.8%</span>
                                                            <i data-feather="arrow-down" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-success">
                                                            <span>2.8%</span>
                                                            <i data-feather="arrow-up" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="badge badge-danger">Released</span></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-danger">
                                                            <span>-2.8%</span>
                                                            <i data-feather="arrow-down" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-success">
                                                            <span>2.8%</span>
                                                            <i data-feather="arrow-up" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="badge badge-danger">Released</span></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-danger">
                                                            <span>-2.8%</span>
                                                            <i data-feather="arrow-down" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                    <td><div class="d-flex align-items-baseline">
                                                        <p class="text-success">
                                                            <span>2.8%</span>
                                                            <i data-feather="arrow-up" class="icon-sm mb-1"></i>
                                                        </p>
                                                    </div></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-xl-9 ">
                            <div class="card overflow-hidden" id="myheight">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-baseline mb-4 mb-md-3">
                                        <h6 class="card-title mb-0">Live Sentiment Analysis</h6>
                                        <div class="dropdown">
                                            <button class="btn p-0" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="icon-lg text-muted pb-3px" data-feather="more-horizontal" />
                                            </button>
                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton3">
                                                <a class="dropdown-item d-flex align-items-center" href="#"><i data-feather="eye" class="icon-sm mr-2" /> <span class="">View</span></a>
                                                <a class="dropdown-item d-flex align-items-center" href="#"><i data-feather="edit-2" class="icon-sm mr-2" /> <span class="">Edit</span></a>
                                                <a class="dropdown-item d-flex align-items-center" href="#"><i data-feather="trash" class="icon-sm mr-2" /> <span class="">Delete</span></a>
                                                <a class="dropdown-item d-flex align-items-center" href="#"><i data-feather="printer" class="icon-sm mr-2" /> <span class="">Print</span></a>
                                                <a class="dropdown-item d-flex align-items-center" href="#"><i data-feather="download" class="icon-sm mr-2" /> <span class="">Download</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row align-items-start mb-2">
                                        <div class="col-md-7">
                                            <p class="text-muted tx-13 mb-3 mb-md-0" style={{ textAlign: "left" }}>StockApe uses deep learning analysis on multiple live data points to generate a trending aggregate sentiment score. Graph will auto update every interval.</p>
                                        </div>
                                        <div class="col-md-5 d-flex justify-content-md-end">
                                            <div class="btn-group mb-3 mb-md-0" role="group" aria-label="Basic example">
                                                <button type="button" class="btn btn-outline-primary">Today</button>
                                                <button type="button" class="btn btn-outline-primary d-none d-md-block active">Week</button>
                                                <button type="button" class="btn btn-outline-primary">Month</button>
                                                <button type="button" class="btn btn-outline-primary">Year</button>
                                            </div>
                                        </div>
                                        <div class="col-md-12 d-flex justify-content-md-end">
                                            <div class="btn-group mb-3 mb-md-0" role="group" aria-label="Basic example">
                                                <img src={i1} width="30px" height="40px" />
                                                <img src={i2} width="30px" height="40px" />
                                                <img src={i3} width="30px" height="40px" />
                                                <img src={i4} width="30px" height="40px" />
                                                <img src={i5} width="30px" height="40px" />
                                                <img src={i6} width="30px" height="40px" />
                                                <img src={i7} width="30px" height="40px" />
                                                <img src={i8} width="30px" height="40px" />
                                                <img src={i9} width="30px" height="40px" />
                                                <img src={i10} width="30px" height="40px" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <h6 id="newfont" style={{ color: "green", marginBottom: "10px" }}>Bullish</h6>
                                    </div>
                                    {/*<canvas id="myChart" width="400" height="400"></canvas>*/}
                                    <div>
                                        {/*<div id="flotChart1" className="flot-chart mygraph" />*/}

                                        <Graph  style={{height: "400px"}} />
                                    </div>
                                    <div className="row">

                                        <h6 id="newfont" style={{ color: "red", marginLeft: "" }}>Bearish</h6>

                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>

                    <div class="row">


                    </div>
                    <br />
                    <div class="row">
                        <div class="col-xl-6 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h6 class="card-title">MOST ACTIVE</h6>
                                    <Donut/>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 grid-margin stretch-card">

                        </div>
                    </div>



                </div>
            </div>
        )
    }
}

export default Home;
