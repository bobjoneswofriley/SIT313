import React from "react";
import Article from "./Article";
import TutorialList from "./TutorialList";

function TutorialComponent(tutorial, i){
    return<Article 
        key = {TutorialList.key}
        img = {TutorialList.img}
        title = {TutorialList.title}
        author = {TutorialList.author}
    />
}

function FeaturedTutorial(){
    return(
        <div>
        {TutorialList.map(  (tutorial ) => 
        <Article 
        key = {tutorial.key}
        img = {tutorial.img}
        title = {tutorial.title}
        desc = {tutorial.desc}
        author = {tutorial.author}/>)}
        </div>
    )
}

export default FeaturedTutorial