import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import About from "./components/About/About";
import Product from "./components/Product/Product";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <div>
            <Switch>
              <Route path="/home" component={Jumbotron}/>
              <Route path="/products" component={Product}/>
              <Route path="/aboutus" component={About}/>
              <Route path="/" component={Jumbotron}/>
            </Switch>
          </div>
        </Router>
        
      </React.Fragment>
    );
  }
}

export default App;
