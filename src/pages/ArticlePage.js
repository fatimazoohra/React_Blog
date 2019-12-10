import React, { Component } from "react";
import articles from "../articles";
import Notfound from "./Notfound";
import ArticlesListComp from "../Components/ArticlesListComp";


class ArticlePage extends Component {


    render() {

        const name=this.props.match.params.name;
        const relatedArticles=articles.filter((art)=> art.name !==name);
        const article=articles.find((art)=>art.name===name)
        if(article)
        return (
             <div>
                 <h1 >{article.titre}</h1>  
                { article.paragraphe.map((p)=> <p>{p}</p>)}
                <hr/>
                <h2>Related Articles</h2>
                <ArticlesListComp articles={relatedArticles}/>
            </div>
        );
    else return <Notfound/>
    }
}
export default ArticlePage;