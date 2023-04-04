import React from 'react'
import signupImg from "../images/kitchen-gb8d80a3e9_1920.jpg"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Find, buy and move with trusted real estate services. "
      desc1="Invest in your future with our expertise."
      desc2="Unlock the door to your future with us."
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
