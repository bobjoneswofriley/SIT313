import React,{useState} from 'react'
import Input from '../Input'
import Button from '../Button'
import {Outlet, Link} from 'react-router-dom'
import '../Login.css'
import '../App.css'
import { signInWithGooglePopup, createUserDocFromAuth} from '../utils/Firebase'

const logGoogleUser = async () => {
    const {user}  = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user)
};

const Login = (props)=>{
        const [contact, setContact] = useState({
            username: '',
            password: ''
        })
       
    

    
    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }


 
    return <div>     
       <b>Username</b>
       <Input
       name= 'username'
       type= 'text'
       placeholder ='username'
       onChange = {handleChange}
       value = {contact.username}
       />

       <br></br>
       <b>Password</b>
       <Input 
       name='password'
       type= 'password'
       placeholder ='password'
       onChange = {handleChange}
       value = {contact.password}
       />

       <br></br>

       <Button 
           type = 'submit'
           text='Login'
       />

      <br></br>
      <br></br>

       <button onClick={logGoogleUser}>
       Login with Google
       </button>

       <br></br>
       <br></br>
       
       <Link className='link' to='/Signup'>
        <b style={{color: '#ADD8E6'}}>Sign Up</b>  
       </Link>

    </div>

}
export default Login