import React from 'react'
import './App.css';
import Navbar from "./component/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home"
import Chart from './pages/Chart'
import Contact from './pages/Contact'
import Detail from './pages/Detail'
import Privacy from './pages/Privacy'
// import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component{
    render() {
        return(
            <Router >
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} ></Route>
                        <Route exact path="/chart" component={Chart}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/detail" component={Detail}/>
                        <Route path="/privacy" component={Privacy}/>
                    </Switch>
            </Router>
        )
    }
}

export default App;
