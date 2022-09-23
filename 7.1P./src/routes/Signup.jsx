import React,{useState} from 'react'
import Input from '../Input'
import Button from '../Button'
import {Outlet, Link} from 'react-router-dom'
import { createAuthUserWithEmailAndPassword } from '../utils/Firebase'
import '../Signup.css'
import '../App.css'


const Signup = (props)=>{
        const [contact, setContact] = useState({
            displayName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
       
    const {displayName, email, password, confirmPassword} = contact;

    
    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }

    const handleSubmit = async (event) =>
    {
        event.preventDefault();

        if(password !== confirmPassword)
        {
            alert('Passwords do not match!')
            return;
        }

        try {
            const response = await createAuthUserWithEmailAndPassword(email, password)
            console.log(response)
        } catch (error) {
            console.log('Error in creating user ' + error.message);
            
        }
    }


 
    return <div className= 'header-div'> 
       
       <b>First name</b>
       <Input 
       name= 'name'
       type= 'text'
       placeholder ='display name'
       onChange = {handleChange}
       value = {contact.displayName}
       />

       <br></br>

       <b>Last name</b>
       <Input 
       name= 'lastName'
       type= 'text'
       placeholder ='last name'
       />

       <br></br>
       
       <b>Email</b>
       <Input 
       name= 'email'
       type= 'email'
       placeholder ='email'
       onChange = {handleChange}
       value = {contact.email}
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

       <b>Confirm Password</b>
       <Input 
       name='confirmPassword'
       type= 'password'
       placeholder ='confirm password'
       onChange = {handleChange}
       value = {contact.confirmPassword}
       />

       <br></br>

       <button onClick={handleSubmit}>
        Sign up
       </button>
  

    </div>

}
export default Signup