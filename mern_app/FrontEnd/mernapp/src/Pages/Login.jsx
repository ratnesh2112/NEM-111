import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const [loginstatus , SetLoginstatus] = useState(false)

    const navigate = useNavigate()

    const handlelogin = async () =>{
        const data = {
            email,
            password
        }
        await fetch("https://calm-lowlands-98798.herokuapp.com/user/login" ,{
            method :"POSt",
            body : JSON.stringify(data),
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((res) =>{
            console.log(res);
            localStorage.setItem("user_token" ,res.token)
            SetLoginstatus(true)
            alert("Login Successfull")
            navigate("/")
        })

    }
  return (
    <div>
        <input type="email" value={email} placeholder='enter email' onChange={(e)=>setEmail(e.target.value)}/>

        <input type="password" value={password} placeholder='enter password' onChange={(e)=>setPassword(e.target.value)}/>

        <div>
            <button onClick={handlelogin}>
                Login
            </button>
        </div>
    </div>
  )
}

export default Login