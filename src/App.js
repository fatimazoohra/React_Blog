import React from "react";
import "./Style/bootstrap.min.css";
//import React{Component} from "react";

import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./Components/Navbar";
import Notfound  from "./pages/Notfound";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom"


function App() {
    return ( <Router >
        <div className = "App" >
        <NavBar/>
        <Switch>
        <Route path = "/" component = { Home } exact />
        <Route path = "/about" component = { AboutPage }/>
        <Route path = "/articles" component = { ArticlesListPage } /> 
        <Route path = "/articles/:name" component = { ArticlePage }/> 
        <Route component={Notfound}/>
        </Switch></ div > </Router>
    );
}
export default App;
