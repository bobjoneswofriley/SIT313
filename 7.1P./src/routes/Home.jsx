import React, {useState} from 'react';
import {Outlet, Link} from 'react-router-dom'

const style={
    backgroundColor: 'grey',
    textAlign: 'center',
    height: '40%',
}

function Home () {
    return(
        <div>
            <form style={style}>
                <label for="email"><b>DEV@DEAKIN</b></label>
                <input type="email" id="email" name="email" placeholder="Search..." size='150' />
                <input type="submit" name = "submit-email" />
                <label style = {{marginLeft: '1.5%'}}><b><Link classname = 'link' to='/Login'>Login</Link></b></label>
            </form>
        </div>
        
    )
}

export default Home