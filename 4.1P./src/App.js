import React from 'react';
import './App.css';
import FeaturedArticle from './FeaturedArticle';
import HeaderImage from './HeaderImage';
import FeaturedTutorial from './FeaturedTutorial';

const buttonStyle={
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '15%',
    height: '40px',
    marginTop: '16.5%',
    paddingBottom: '1.5%',
    borderRadius: '12px'
}

const headerStyle={
    textAlign: 'center',
    marginTop: '2%'
}

function App(){
    return(
        <div>
            <HeaderImage />
            <h1 style = {headerStyle}>Featured Articles</h1>
            <FeaturedArticle />
            <button type = 'button' style = {buttonStyle}><b>See all articles</b></button>
            <h1 style = {headerStyle}>Featured Tutorials</h1>
            <FeaturedTutorial />
            <button type = 'button' style = {buttonStyle}><b>See all tutorials</b></button>
        </div>
    );
}

export default App;