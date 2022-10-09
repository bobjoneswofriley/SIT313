import React, {useState} from 'react';
import {Outlet, Link} from 'react-router-dom'
import Input from '../Input'

const style={
    backgroundColor: 'grey',
    textAlign: 'center',
    height: '40%',
}


function Home () {

    const [contact, setContact] = useState({
        email: ''
    })
   

    const handleClick = async () => {
        await fetch ('http:localhost:8003/', {
            method: "post",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                email: contact.email
            })
        })
    
        .then(response => response.json())
        .then(data => JSON.parse(data))
        .catch(err => {
            console.log("Error: " + err)
        })
    }

    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{
        return {
        ...preValue,
        [name]: value
        }
        })
    }

    return(
        <div>
            <form style={style}>
                <label for="email"><b>DEV@DEAKIN</b></label>
                <input type="email" id="email" name="email" placeholder="Enter your email" onChange={handleChange} value = {contact.email} size='150' />
                <input type="submit" onClick={handleClick} name = "submit-email" value = 'Subscribe '/>
                <label style = {{marginLeft: '1.5%'}}><b><Link className = 'link' to='/Login'>Login</Link></b></label>
            </form>
        </div>
        
    )
}

export default Home