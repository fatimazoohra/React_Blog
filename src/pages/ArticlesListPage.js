
import React, { Component } from "react";
import articles from "../articles";

import ArticlesListComp from "../Components/ArticlesListComp";

class ArticlesListPage extends Component {

    render() {
        return ( 
            <div >
            
            <h1 > Articles List: </ h1>  
            <ArticlesListComp articles = { articles }/>
            </ div >

        );

    }
}
export default ArticlesListPage;