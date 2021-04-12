import React from 'react';
import { Link } from 'react-router-dom'
import stockape_logo from '../assets/stockape_logo.png'
import './Style.css'
// import './style.css.map'
import '../App.css'

const Navbar = () => {
    return (
        <div className="main-wrapper ">
            <nav className='sidebar'>
                <div className='sidebar-header'>
                    <a href='#' className='sidebar-brand' style={{ backgroundColor: 'black' }}>
                        <img src={stockape_logo} width="130px" alt='img' />
                    </a>
                        <div className="sidebar-toggler  not-active">
                            <span />
                            <span />
                            <span />
                        </div>
                    {/*<button className="siderbar-toggler" type="button" data-toggle="collapse"*/}
                    {/*        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
                    {/*        aria-expanded="false" aria-label="Toggle navigation">*/}
                    {/*    <span className="sidebar-toggler"></span>*/}
                    {/*</button>*/}
                </div>
                <div className='nav1' style={{height:'100%'}}>
                    <ul className='il '>
                        <li className="nav-item nav-category" style={{ textAlign: "left" }}>
                            Main
                        </li>
                        <Link exact to='/'className='il'>
                            <li className="nav-item">
                                <a href="" className="nav-link ho">
                                    {/*<i className="link-icon" href={icon1} />*/}
                                    <svg style={{color:"white"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                         stroke-linejoin="round" className="feather feather-box link-icon">
                                        <path
                                            d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                                    </svg>
                                    <span className="link-title" style={{color:'white',marginLeft:'10px'}}>Dashboard</span>
                                </a>
                            </li>
                        </Link>
                        <li className="nav-item nav-category" style={{ textAlign: "left" }}>
                            Featured
                        </li>
                        <Link to="/chart">
                            <li className="nav-item">
                                <a href="" className="nav-link">
                                    {/*<i className="link-icon" data-feather="pie-chart" />*/}
                                    <svg style={{color:"white"}} className="link-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                         stroke-linejoin="round" className="feather feather-pie-chart link-icon">
                                        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
                                        <path d="M22 12A10 10 0 0 0 12 2v10z"/>
                                    </svg>
                                    <span className="link-title" style={{color:'white',marginLeft:'10px'}}>Chart</span>
                                </a>
                            </li>
                        </Link>
                        <Link to="/contact">
                            <li className="nav-item">
                                <a href="" className="nav-link">
                                    {/*<i className="link-icon" data-feather="message-square" />*/}
                                    <svg style={{color:"white"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                         stroke-linejoin="round" className="feather feather-message-square link-icon">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                    </svg>
                                    <span className="link-title" style={{color:'white',marginLeft:'10px'}}>Contact</span>
                                </a>
                            </li>
                        </Link>
                        <Link to="/detail">
                            <li className="nav-item">
                                <a href="" className="nav-link">
                                    {/*<i className="link-icon" data-feather="layout" />*/}
                                    <svg style={{color:"white"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                         stroke-linejoin="round" className="feather feather-layout link-icon">
                                        <rect x="3" y="3" width="18" height="18" rx="5" ry="5"/>
                                        <line x1="3" y1="9" x2="21" y2="9"/>
                                        <line x1="9" y1="21" x2="9" y2="9"/>
                                    </svg>
                                    <span className="link-title" style={{color:'white',marginLeft:'10px'}}>Details</span>
                                </a>
                            </li>
                        </Link>
                        <Link to="/privacy">
                            <li className="nav-item">
                                <a href="" className="nav-link">
                                    {/*<i className="link-icon" data-feather="unlock" />*/}
                                    <svg style={{color:"white"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                         stroke-linejoin="round" className="feather feather-unlock link-icon">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                        <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
                                    </svg>
                                    <span className="link-title" style={{marginLeft:'10px', color:'white'}}>Privacy</span>
                                </a>
                            </li>
                        </Link>
                    </ul>
                </div>

            </nav>
            <nav class="navbar">
                <a href="#" class="sidebar-toggler">
                    <i data-feather="menu"/>
                </a>
                <div class="navbar-content">
                    <form class="search-form">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <i data-feather="search"/>
                                </div>
                            </div>
                            <input type="text" class="form-control" id="navbarForm" placeholder="Search here..." />
                        </div>
                    </form>
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="languageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="flag-icon flag-icon-us mt-1" title="us"/> <span class="font-weight-medium ml-1 mr-1">English</span>
                            </a>

                        </li>
                        {/* <li class="nav-item dropdown nav-apps">
                   <a class="nav-link dropdown-toggle" href="#" id="appsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       <i data-feather="grid"></i>
                   </a>
                   <div class="dropdown-menu" aria-labelledby="appsDropdown">
                       <div class="dropdown-header d-flex align-items-center justify-content-between">
                           <p class="mb-0 font-weight-medium">Web Apps</p>
                           <a href="javascript:;" class="text-muted">Edit</a>
                       </div>
                       <div class="dropdown-body">
                           <div class="d-flex align-items-center apps">
                               <a href="pages/apps/chat.html"><i data-feather="message-square" class="icon-lg"></i><p>Chat</p></a>
                               <a href="pages/apps/calendar.html"><i data-feather="calendar" class="icon-lg"></i><p>Calendar</p></a>
                               <a href="pages/email/inbox.html"><i data-feather="mail" class="icon-lg"></i><p>Email</p></a>
                               <a href="pages/general/profile.html"><i data-feather="instagram" class="icon-lg"></i><p>Profile</p></a>
                           </div>
                       </div>
                       <div class="dropdown-footer d-flex align-items-center justify-content-center">
                           <a href="javascript:;">View all</a>
                       </div>
                   </div>
               </li> */}
                        {/* <li class="nav-item dropdown nav-messages">
                   <a class="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       <i data-feather="mail"></i>
                   </a>
                   <div class="dropdown-menu" aria-labelledby="messageDropdown">
                       <div class="dropdown-header d-flex align-items-center justify-content-between">
                           <p class="mb-0 font-weight-medium">9 New Messages</p>
                           <a href="javascript:;" class="text-muted">Clear all</a>
                       </div>
                       <div class="dropdown-body">
                           <a href="javascript:;" class="dropdown-item">
                               <div class="figure">
                                   <img src="https://via.placeholder.com/30x30" alt="userr" />
                               </div>
                               <div class="content">
                                   <div class="d-flex justify-content-between align-items-center">
                                       <p>Leonardo Payne</p>
                                       <p class="sub-text text-muted">2 min ago</p>
                                   </div>
                                   <p class="sub-text text-muted">Project status</p>
                               </div>
                           </a>
                           <a href="javascript:;" class="dropdown-item">
                               <div class="figure">
                                   <img src="https://via.placeholder.com/30x30" alt="userr" />
                               </div>
                               <div class="content">
                                   <div class="d-flex justify-content-between align-items-center">
                                       <p>Carl Henson</p>
                                       <p class="sub-text text-muted">30 min ago</p>
                                   </div>
                                   <p class="sub-text text-muted">Client meeting</p>
                               </div>
                           </a>
                           <a href="javascript:;" class="dropdown-item">
                               <div class="figure">
                                   <img src="https://via.placeholder.com/30x30" alt="userr" />
                               </div>
                               <div class="content">
                                   <div class="d-flex justify-content-between align-items-center">
                                       <p>Jensen Combs</p>
                                       <p class="sub-text text-muted">1 hrs ago</p>
                                   </div>
                                   <p class="sub-text text-muted">Project updates</p>
                               </div>
                           </a>
                           <a href="javascript:;" class="dropdown-item">
                               <div class="figure">
                                   <img src="https://via.placeholder.com/30x30" alt="userr" />
                               </div>
                               <div class="content">
                                   <div class="d-flex justify-content-between align-items-center">
                                       <p>Amiah Burton</p>
                                       <p class="sub-text text-muted">2 hrs ago</p>
                                   </div>
                                   <p class="sub-text text-muted">Project deadline</p>
                               </div>
                           </a>
                           <a href="javascript:;" class="dropdown-item">
                               <div class="figure">
                                   <img src="https://via.placeholder.com/30x30" alt="userr" />
                               </div>
                               <div class="content">
                                   <div class="d-flex justify-content-between align-items-center">
                                       <p>Yaretzi Mayo</p>
                                       <p class="sub-text text-muted">5 hr ago</p>
                                   </div>
                                   <p class="sub-text text-muted">New record</p>
                               </div>
                           </a>
                       </div>
                       <div class="dropdown-footer d-flex align-items-center justify-content-center">
                           <a href="javascript:;">View all</a>
                       </div>
                   </div>
               </li> */}
                        {/* <li class="nav-item dropdown nav-notifications">
                   <a class="nav-link dropdown-toggle" href="#" id="notificationDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       <i data-feather="bell"></i>
                       <div class="indicator">
                           <div class="circle"></div>
                       </div>
                   </a>
                   <div class="dropdown-menu" aria-labelledby="notificationDropdown">
                       <div class="dropdown-header d-flex align-items-center justify-content-between">
                           <p class="mb-0 font-weight-medium">6 New Notifications</p>
                           <a href="javascript:;" class="text-muted">Clear all</a>
                       </div>
                       <div class="dropdown-body">
                           <a href="javascript:;" class="dropdown-item">
                               <div class="icon">
                                   <i data-feather="user-plus"></i>
                               </div>
                               <div class="content">
                                   <p>New customer registered</p>
                                   <p class="sub-text text-muted">2 sec ago</p>
                               </div>
                           </a>
                           <a href="javascript:;" class="dropdown-item">
                               <div class="icon">
                                   <i data-feather="gift"></i>
                               </div>
                               <div class="content">
                                   <p>New Order Recieved</p>
                                   <p class="sub-text text-muted">30 min ago</p>
                               </div>
                           </a>
                           <a href="javascript:;" class="dropdown-item">
                               <div class="icon">
                                   <i data-feather="alert-circle"></i>
                               </div>
                               <div class="content">
                                   <p>Server Limit Reached!</p>
                                   <p class="sub-text text-muted">1 hrs ago</p>
                               </div>
                           </a>
                           <a href="javascript:;" class="dropdown-item">
                               <div class="icon">
                                   <i data-feather="layers"></i>
                               </div>
                               <div class="content">
                                   <p>Apps are ready for update</p>
                                   <p class="sub-text text-muted">5 hrs ago</p>
                               </div>
                           </a>
                           <a href="javascript:;" class="dropdown-item">
                               <div class="icon">
                                   <i data-feather="download"></i>
                               </div>
                               <div class="content">
                                   <p>Download completed</p>
                                   <p class="sub-text text-muted">6 hrs ago</p>
                               </div>
                           </a>
                       </div>
                       <div class="dropdown-footer d-flex align-items-center justify-content-center">
                           <a href="javascript:;">View all</a>
                       </div>
                   </div>
               </li> */}
                        {/* <li class="nav-item dropdown nav-profile">
                   <a class="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       <img src="https://via.placeholder.com/30x30" alt="profile" />
                   </a>
                   <div class="dropdown-menu" aria-labelledby="profileDropdown">
                       <div class="dropdown-header d-flex flex-column align-items-center">
                           <div class="figure mb-3">
                               <img src="https://via.placeholder.com/80x80" alt="" />
                           </div>
                           <div class="info text-center">
                               <p class="name font-weight-bold mb-0">Amiah Burton</p>
                               <p class="email text-muted mb-3">amiahburton@gmail.com</p>
                           </div>
                       </div>
                       <div class="dropdown-body">
                           <ul class="profile-nav p-0 pt-3">
                               <li class="nav-item">
                                   <a href="pages/general/profile.html" class="nav-link">
                                       <i data-feather="user"></i>
                                       <span>Profile</span>
                                   </a>
                               </li>
                               <li class="nav-item">
                                   <a href="javascript:;" class="nav-link">
                                       <i data-feather="edit"></i>
                                       <span>Edit Profile</span>
                                   </a>
                               </li>
                               <li class="nav-item">
                                   <a href="javascript:;" class="nav-link">
                                       <i data-feather="repeat"></i>
                                       <span>Switch User</span>
                                   </a>
                               </li>
                               <li class="nav-item">
                                   <a href="javascript:;" class="nav-link">
                                       <i data-feather="log-out"></i>
                                       <span>Log Out</span>
                                   </a>
                               </li>
                           </ul>
                       </div>
                   </div>
               </li> */}
                    </ul>
                </div>
            </nav>


        </div>
    )
};

export default Navbar;
