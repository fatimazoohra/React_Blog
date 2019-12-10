import React, { Component } from "react";
import { link } from "react-router-dom"

class navBar extends Component {
    //state = {};

    render() {
        return ( 
        <div className = "container" >
            <ul>
                     < li ><link to = "/" > Home </link> </li>
                    <li ><link to = "/about" > About </link> </li>
                    <li ><link to = "/articles" > Articles </link> </li>
            </ul>
        </div>
        );
    }
}
export default navBar;