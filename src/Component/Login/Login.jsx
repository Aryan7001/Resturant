import React, { useState } from 'react'
import './Login.css'
import { signUp,Logins } from '../../Firebase'

const Login = ({setLogin}) => {

    const[signin, setSignIn] = useState('signin')
    const[person,setPerson] = useState({
      name:'',
      email:'',
      password:''
    });

const handleSubmit=async(e)=>{
  e.preventDefault();
  const{name,email,password} = person;
  try{
    if(signin==='signin'){
      await signUp(name,email,password)
      alert('Account created Successfully bhaiya ji')
    }else{
      await Logins(email,password)
      alert('Login Successfully bhaiya ji')
    }
    setPerson({name:'', email:'', password:''})
  }
catch(error){
  console.log(error)
  alert("error hey bhaiya ")
}
}

   const handleChange=(e)=>{
const{name,value}= e.target;
setPerson((prevValue)=>({
  ...prevValue,
  [name]:value
}))
    }

  return (
    <div className='login'>
      <div className='login-items'>
        <div className="login-heading">
        <h1>{signin}</h1>
        <p onClick={()=>setLogin(false)}>x</p>
        </div>
      <div className="details">
        {signin=== 'Login'? null :<input type="text" name='name' value={person.name}  placeholder='Username' onChange={handleChange} required /> }
       <input type="Email" name='email' value={person.email} placeholder='Email' onChange={handleChange} required />
        <input type="Password" name='password' value={person.password} placeholder='Password' onChange={handleChange} required />
        <div className="login-buttons">
         <button onClick={handleSubmit} >{signin==='signin'?'create a account':'Login'}</button>
        </div>

<div className='login-condition'>
<input type="checkbox" />
<p>By accepting our terms and condition </p>
</div>
    {signin==="Login"?  
    <p>Do not have account? <span onClick={()=>setSignIn("signin")}>Click here</span></p>:    
<p>Already have account? <span onClick={()=>setSignIn("Login")}>Login here</span></p>
 
}
</div>

      </div>
      
      </div>
  )
}

export default Login
