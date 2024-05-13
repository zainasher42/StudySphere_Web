import React from 'react'
import './styles.css'
import { useNavigate, Link } from 'react-router-dom'
import BackgroundImg from '../../components/BackgroundImg'
import SignInCard from '../../components/SignIn/SignInCard'

function SignIn() {
  return (
      <>
          <BackgroundImg />
          <SignInCard />
      </>
  )
}

export default SignIn
    

/*
const [username,setUsername]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const history = useNavigate();

async function submit(e)
{
  e.preventDefault()

  try{
    await axios.post("http://localhost:8000/",{
      username,email,password
    })
    .then(res=>{
      if(res.data=="exist"){
        history("/welcome", {state:{id:email}})
      }
      else if(res.data=="not exist"){
        alert("user has not signed up")
      }
    })
    .catch(e=>{
      alert("wrong details")
      console.log(e)
    })
  }
  catch{
    console.log(e)
  }
}


<form action = "POST">
  <input type = "username" onchange = {(e)=>{setUsername(e.target.value)}} placeholder = "Username" name = "" id = "" /> 
  <input type = "email" onchange = {(e)=>{setEmail(e.target.value)}} placeholder = "Email" name = "" id = "" /> 
  <input type = "password" onchange = {(e)=>{setPassword(e.target.value)}} placeholder = "Password" name = "" id = "" /> 

  <input type = "submit" onClick = {submit}/>
</form>

<br />
<p> OR </p>
<br />

<Link to = "/signup"> Sign Up </Link>
*/