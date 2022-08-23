import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = () => {

    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [phone , setPhone] = useState("")
    const [password , setPassword] = useState("")

    const navigate = useNavigate()

    const handlesubmit = async () =>{
        const payload = {
            name,email,phone,password
        }
        console.log(payload);

        await fetch("https://calm-lowlands-98798.herokuapp.com/user/signup",{
            method : "POST",
            body : JSON.stringify(payload),
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then(() =>{
            alert("Signup Succesfull");

            navigate("/login")

        })
    }

  return (
    <div>
        <h2>Register Please</h2>
        <div>
            <input type="text" value={name} placeholder='Enter name'  onChange={(e)=>setName(e.target.value)}/>
            <input type="email" value={email} placeholder='enter email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="number" value={phone} placeholder='enter phone' onChange={(e)=>setPhone(e.target.value)}/>
            <input type="password" value={password} placeholder='enter password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
            <button onClick={handlesubmit}>Register</button>
        </div>
    </div>
  )
}

export default Signup