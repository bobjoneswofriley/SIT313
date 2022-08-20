import React from "react";

const style={
    float: 'left',
    display: 'inline-block',
    position: 'relative',
    marginTop: '1.5%',
    marginLeft: '10%',
    left: '5%',
}

const imageStyle={
    border: 'solid'
}

function Article(props){
    return(
        <div style = {style}>
            <img src = {props.img} style = {imageStyle}/>
            <b style = {{marginLeft: '1.5%'}}>{props.title}</b>
            <p>{props.desc}</p>
            <p><b>5&#9733; {props.author}</b></p>
        </div>
    )
}

export default Article