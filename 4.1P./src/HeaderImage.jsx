import React from "react"

const imageStyle={
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '85%',
    paddingBottom: '1.5%'
}
function HeaderImage(){
    return(
        <div>
            <img src = {'https://picsum.photos/1920/500?random=4'} style = {imageStyle}/>
        </div>
    )
}

export default HeaderImage;
