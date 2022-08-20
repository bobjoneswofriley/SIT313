import React from 'react'
import Article from './Article'
import ArticleList from './ArticleList'

function ArticleComponent(article, i){
    return<Article 
        key = {ArticleList.key}
        img = {ArticleList.img}
        title = {ArticleList.title}
        author = {ArticleList.author}
    />
}

function FeaturedArticle(){
    return(
        <div>
        {ArticleList.map(  (article ) => 
        <Article 
        key = {article.key}
        img = {article.img}
        title = {article.title}
        desc = {article.desc}
        author = {article.author}/>)}
        </div>
    )
}

export default FeaturedArticle