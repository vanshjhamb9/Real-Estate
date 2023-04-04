import React from 'react'
import Template from '../components/Template'
import loginImg from "../images/REpic.jpg"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Discover your perfect home with us."
      desc2="Building strong communities through real estate."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
