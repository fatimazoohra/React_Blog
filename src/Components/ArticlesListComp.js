import React, { Component } from "react";
//mport articles from "../articles"
import {Link} from 'react-router-dom';
class ArticlesListComp extends Component {


    render() {
        console.log("this.props");
        return ( <div >

            {this.props.articles.map((article)=>{
            return( <Link to={`/article/$(article.name)`}>
                    <h3>{article.titre}</h3>
            </Link>);
            })}

            </ div >
            
        );
    }
}

export default ArticlesListComp;