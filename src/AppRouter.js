import React, { Component } from "react";
import {Router, BrowserRouter} from 'react-router-dom'; //Aprés faire npm install react-router-dom
import "./style/bootstrap.min.css";

import About from "./pages/About";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import navBar from "./Components/NavBar";

class App extends Component {
  state = {
    page:'Abo'
  };

  render() {
   
    return (
      <div className="App">
        <navBar clickHandel={handleClick} />
        <hr/>
        <Router>
          <Route on='/' component={Home}/>
          <Route on='/about' component={About} />
          <Route on='/article' component={Articles} />
        <Router>
      </div>
    );
  }
}
export default App;