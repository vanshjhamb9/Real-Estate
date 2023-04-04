import React from 'react'
import logo from "../images/Black Monoline Real Estate Logo (3).png"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    function scroll() {
        const vision = document.getElementById('vision')
        vision.scrollIntoView({behavior:'smooth'})
   }
    function contact() {
        const Contact = document.getElementById('contactus')
        Contact.scrollIntoView({behavior:'smooth'}) 

    }

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

       {!isLoggedIn &&   
        <Link to="/login"> 
            <img src={logo} alt="Logo" className='' width={105}  height={20} loading="lazy"/>
        </Link>
       }
       {
        isLoggedIn &&
        <Link to="/dashboard"> 
            <img src={logo} alt="Logo" className='' width={105}  height={20} loading="lazy"/>
        </Link>
       }
        <nav>
            <ul className='flex gap-x-6 text-lg text-webColor-1 font-semibold '>
                <li> {
                    !isLoggedIn &&
                    <Link to="/login">Home</Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/dashboard">Home</Link>
                }
                </li>
                <li>
                {
                    !isLoggedIn &&
                    <Link to="/login">About</Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/dashboard" onClick={scroll}> About </Link>
                }
                </li>
                <li>
                {
                    !isLoggedIn &&
                    <Link to="/login">Contact</Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/dashboard" onClick={contact}>Contact</Link>
                }
                </li>
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button  className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/login">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}
                    className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button
                     className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar
