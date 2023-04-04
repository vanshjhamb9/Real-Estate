import React, { useState } from 'react'
import image1 from "../images/jason-briscoe-UV81E0oXXWQ-unsplash.jpg";
import image2 from "../images/connor-wang-MNz7IGrcEl0-unsplash.jpg"
import sale1 from "../images/sale1.png"
import sale2 from "../images/sale2.png"
import sale3 from "../images/sale3.png"
import rent1 from "../images/Home.png"
import rent2 from "../images/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg"
import rent3 from "../images/francesca-tosolini-XcVm8mn7NUM-unsplash.jpg"
import bgimage from "../images/kam-idris-hYb7kbu4x7E-unsplash.jpg"
import { RiDoubleQuotesL } from "react-icons/ri";
import { SlSocialFacebook,SlSocialInstagram,SlSocialYoutube} from "react-icons/sl";
import logo from "../images/Black Monoline Real Estate Logo (3).png"

const Dashboard = () => {
  const [AccountType, setAccountType] = useState("buy");
  const [formtype, setformtype] = useState("buy")
  
  function changeHandler(event){
  setformtype((prevData) => ({
    ...prevData,
    [event.target.name] : event.target.value
    
  }),
  console.log(formtype)
  )
}


  function scrollHandler() {
    const element = document.getElementById('contactus')
    element.scrollIntoView({behavior:'smooth'})
  }
  
  return (
    <div className='w-10/12 scroll-smooth'>
    <div className=' w-11/12  h-[463px] mt-[2rem] flex flex-col text-3xl text-left space-y-[6rem] ' id='Home'>
      <h1 className='flex flex-col mx-[11rem] text-[5rem] space-y-14 font-forum text-[#AF8C53] mt-[5rem]'>
         <span> Let us help </span> 
         <span> you find your </span>
         <span>dream home. </span>
      </h1>
      <div className='flex gap-10 mx-[10rem] mt-[15rem] font-mono  text-webColor-1'>
          <button
          className={`${AccountType === "buy"  ?
          " bg-webColor-1 text-richblack-900 py-3 w-[14rem] rounded-full transition-all duration-200"
          : "border border-[#AF8C53]" } text-[1.3rem] rounded-full py-3 w-[14rem]`}
          onClick={ ()=> setAccountType("buy")}
          onChange={changeHandler}
          name='buy'
          value={formtype.name}
          >
             Buy a home</button>

      <button className= {`${AccountType === "sale" ?
      (" bg-webColor-1 text-richblack-900 py-3 w-[14rem] rounded-full transition-all duration-200") : 
      "border border-[#AF8C53]" } text-[1.3rem] rounded-full py-3 w-[14rem] }`}
      onClick={ () => setAccountType("sale")}
      onChange={changeHandler}
          name='sale'
          value={formtype.name} >
      List a home</button>
      </div>
      <img src={image1}  width='450px' height='400px'
        className='absolute right-0 top-5'
      />
    </div>
      
      <div className='w-screen bg-webColor-2 py-[7rem] mt-[10rem]'>
    <div id='vision' className=' bg-webColor-2 ml-[45rem] flex flex-col space-y-[6rem] ' >
     <h1 className='relative flex flex-col text-[2.4rem] max-w-[520px] leading-7 text-left font-forum text-[#AF8C53] mt-[4rem] space-y-[2rem]'>
     <span>Our vision is to be the </span> 
    <span> most trusted and </span>
    <span>respected real estate </span>
    <span>agency in Roseton.</span>
    </h1>
    <button className="border border-[#AF8C53] text-webColor-1 transition-all duration-300 
     hover:bg-webColor-1 hover:text-webColor-2 hover:border-webColor-2 mx-[3rem] text-[1rem] rounded-full py-3 w-[12rem]"
     onClick={scrollHandler}
     >Contact Us</button>
    <img src={image2} 
      width='500px'
      className='absolute left-0 h-[600px] overflow-hidden top-[43.5rem] object-cover '
    />
    </div>

    <h1 className='relative flex flex-col text-[3rem] leading-7 font-forum text-[#AF8C53] mt-[12rem] text-center py-[40px]'
    >Properties for Sale</h1>

    <div className='relative mt-[6rem] max-w-[1200px] space-x-10 grid grid-cols-3 mx-auto'>
      
      <div className='relative flex flex-col items-center text-center space-y-5 h-full'>
      <img className=' w-[22rem] object-fill h-[16rem]' src={sale1} />
        <div className='py-6 w-[88%] flex flex-col text-lg border-t-2 border-b-2 border-webColor-1 text-webColor-1 space-y-3'>
          <h2 className=' font-mono'>Rowhouse</h2>
          <p className=' font-forum text-2xl'>Omaxe The Resort</p>
          <div className=' font-thin relative'>
           <div className=' relative flex ml-24'> 2 Beds <div className='w-[2px] mt-1 mx-2 h-4 py-3 bg-webColor-1'></div> 1 Bath <div className='w-[2px] mt-1 mx-2 h-4 py-3 bg-webColor-1'></div> 1 Car</div>
          <div>Wheelchair accessible listing</div>
          </div>
        </div>
      </div>

      <div className='relative flex flex-col items-center text-center space-y-5 h-full'>
      <img className=' w-[22rem] bg-cover h-[16rem]' src={sale2} />
        <div className='py-6 w-full flex flex-col text-lg border-t-2 border-b-2 border-webColor-1 text-webColor-1 space-y-3'>
          <h2 className=' font-mono'>Condo</h2>
          <p className=' font-forum text-2xl'>Nobel Culesta, Airport road</p>
          <div className=' font-thin relative'>
           <div className=' relative flex ml-24'> 2 Beds <div className='w-[2px] mt-1 mx-2 h-4 py-3 bg-webColor-1'></div> 1 Bath <div className='w-[2px] mt-1 mx-2 h-4 py-3 bg-webColor-1'></div> 1 Car</div>
          <br/>
          </div>
        </div>
      </div>

      <div className='relative flex flex-col items-center text-center space-y-5 h-full'>
      <img className=' w-[22rem] bg-cover h-[16rem]' src={sale3} />
        <div className='py-6 w-full flex flex-col text-lg border-t-2 border-b-2 border-webColor-1 text-webColor-1 space-y-3'>
          <h2 className=' font-mono'>Single family home</h2>
          <p className=' font-forum text-2xl'>Escone Primera</p>
          <div className=' font-thin relative'>
           <div className=' relative flex ml-24'> 2 Beds <div className='w-[2px] mt-1 mx-2 h-4 py-3 bg-webColor-1'></div> 1 Bath <div className='w-[2px] mt-1 mx-2 h-4 py-3 bg-webColor-1'></div> 1 Car</div>
          <div>Wheelchair accessible listing</div>
          </div>
        </div>
      </div>


    </div>
    
    </div>
     <h1 className='relative flex flex-col ml-48 text-[3rem] leading-7 font-forum text-[#AF8C53] mt-[2rem] text-center py-[40px]'
    >Properties for Rent</h1>

    <div className='relative mt-[6rem] space-x-14 grid grid-cols-3 left-[5rem]'>
      
      <div className='relative flex flex-col items-center text-center space-y-5 h-full'>
      <img className=' w-[22rem] object-fill h-[16rem]' src={rent1} />
        <div className='py-6 w-[88%] flex flex-col text-lg border-t-2 border-b-2 border-webColor-1 text-webColor-1 space-y-3'>
          <h2 className=' font-mono'>Rowhouse</h2>
          <p className=' font-forum text-2xl'>Gunaar meadows</p>
          <div className=' font-thin relative'>
           <div className=' relative flex ml-24'> 2 Beds <div className='w-[2px] mt-1 mx-2 h-4 py-3 bg-webColor-1'></div> 1 Bath <div className='w-[2px] mt-1 mx-2 h-4 py-3 bg-webColor-1'></div> 1 Car</div>
          <div>Wheelchair accessible listing</div>
          </div>
        </div>
      </div>

      <div className='relative flex flex-col items-center text-center space-y-5 h-full'>
      <img className=' w-[22rem] bg-cover h-[16rem]' src={rent2} />
        <div className='py-6 w-full flex flex-col text-lg border-t-2 border-b-2 border-webColor-1 text-webColor-1 space-y-3'>
          <h2 className=' font-mono'>Rowhouse</h2>
          <p className=' font-forum text-2xl'>Ambika Florence park</p>
          <div className=' font-thin relative'>
           <div className=' relative flex ml-24'> 2 Beds <div className='w-[2px] mt-1 mx-2 h-4 py-3 bg-webColor-1'></div> 1 Bath <div className='w-[2px] mt-1 mx-2 h-4 py-3 bg-webColor-1'></div> 1 Car</div>
           <div> <br/></div>
          </div>
        </div>
      </div>

      <div className='relative flex flex-col items-center text-center space-y-5 h-full'>
      <img className=' w-[22rem] bg-cover h-[16rem]' src={rent3} />
        <div className='py-6 w-full flex flex-col text-lg border-t-2 border-b-2 border-webColor-1 text-webColor-1 space-y-3'>
          <h2 className=' font-mono'>Rowhouse</h2>
          <p className=' font-forum text-2xl'>Ananta lifestyle</p>
          <div className=' font-thin relative'>
           <div className=' relative flex ml-24'> 2 Beds <div className='w-[2px] mt-1 mx-2 h-4 py-3 bg-webColor-1'></div> 1 Bath <div className='w-[2px] mt-1 mx-2 h-4 py-3 bg-webColor-1'></div> 1 Car</div>
          <div>Wheelchair accessible listing</div>
          </div>
        </div>
      </div>


    </div>
    
    <div className='w-screen py-32 mt-24 mx-auto bg-cover'
    style={{backgroundImage:`url(${bgimage})`} }>
    <div className=' backdrop-grayscale h-[700px] backdrop-blur-sm backdrop-saturate-150 w-full'>
      <h1 className=' font-serif text-[4rem] text-webColor-1   mx-[5rem] '>Happy Clients</h1>
      <div className='relative mt-[6rem] max-w-[1200px]  space-x-14 grid grid-cols-3 left-[5rem]'>
      <div className='flex flex-col text-webColor-1 font-bold outline-dashed space-y-10'>
        <div className='flex items-center max-w-[350px] space-x-3 text-[2rem] backdrop-blur-3xl  ' >
           <RiDoubleQuotesL className='text-[2.5rem] w-[60px] text-webColor-1  ' /> 
           <div className='w-full bg-webColor-1 h-0.5 '></div>
        </div>
        <div className=' font-Changa text-lg '>Wow! Made buying a house such a breeze! I was new to home buying, and have heard horror stories from friends and family about terrible agents. Urban Insight was professional and personal! She never made me feel uncomfortable and helped me every step of the way!</div>
        <div className=' font-light-semibold text-webColor-1  text-[1.2rem] '>- Natalia Lowe</div>
           </div>

           <div className='flex flex-col  text-webColor-1  px-3  font-bold outline-dashed space-y-10'>
        <div className='flex items-center max-w-[350px] space-x-3 text-[2rem]'>
           <RiDoubleQuotesL className='text-[2.5rem] w-[60px] text-webColor-1 ' /> 
           <div className='w-full bg-webColor-1 h-0.5 '></div>
        </div>
        <div className=' font-Changa text-lg '>Great environment, professional and nice people, clean and beautiful office set up. They care about their clients and train their agents frequently so they are always updated with what’s going on in the market. I recommend Urban Insight to anyone looking to do any Real Estate transaction.</div>
        <div className=' font-light-semibold text-webColor-1  text-[1.2rem] '>- Elliot Sterling</div>
           </div>

           <div className='flex flex-col  text-webColor-1  py-4  font-bold outline-dashed px-5 space-y-10'>
        <div className='flex items-center max-w-[350px] space-x-3 text-[2rem]'>
           <RiDoubleQuotesL className='text-[2.5rem] w-[60px] text-webColor-1 ' /> 
           <div className='w-full bg-webColor-1 h-0.5 '></div>
        </div>
        <div className=' font-Changa text-lg '>Urban Insight was more than helpful in finding us an apartment in Chandigarh. He was extremely honest, upfront, and was able to find us a great apartment that fit right in our price range! He was extremely communicative and easy to reach to answer any of our questions at all times. UI made he nightmare that is finding an Apartment in Chandigarh a breeze!
</div>
        <div className=' font-light-semibold text-webColor-1  text-[1.2rem] '>- Lillian Pratt</div>
           </div>
      </div>
      </div>
    </div>

    <div className='w-11/12 mx-auto my-10 px-24 py-[4rem]' 
    id='contactus'>
    <div className='flex space-x-28   '>
       <div className='flex flex-col space-y-[2rem]'>
        <img src={logo} width="170px" />


          <h1 className='font-serif text-webColor-1 text-[3rem]'>Lets's Talk</h1>
           
           <div className='w-[350px] border py-3 px-6 text-xl font-forum rounded-3xl text-webColor-1 border-webColor-1'>Sector 38 C, Chandigarh</div>
           <div className='w-[350px] border py-3 px-6 text-xl font-forum rounded-3xl text-webColor-1 border-webColor-1'>+91 8769626027</div>
           <div className='w-[350px] border py-3 px-6 text-xl font-forum rounded-3xl text-webColor-1 border-webColor-1'>vanshjhamb9@gmai.com</div>
           
           <div className='w-[350px] flex justify-between border py-3 px-6 text-xl font-forum rounded-3xl bg-webColor-1 text-richblack-900  border-webColor-1'>Get Social 
           <div className='flex text-[1.6rem] '>
           <SlSocialYoutube className='cursor-pointer transition-all hover:scale-110 duration-300'/>
           <SlSocialFacebook className='cursor-pointer transition-all hover:scale-110 duration-300'/>
           <SlSocialInstagram className='cursor-pointer transition-all hover:scale-110 duration-300'/>
            </div> </div>
            </div>
            <div className='flex flex-col space-y-[2rem] mt-[12.5rem]'>
              <h1 className='font-serif text-webColor-1 text-[3rem]'>Business Hours</h1>
              <div className='w-[400px] flex flex-col border space-y-8 py-7 px-10 text-xl font-forum rounded-3xl bg-webColor-1 border-webColor-2 text-richblack-900 '>
                  
                <ul>
                <li>Monday to Friday</li>
                  <li>9:00 am to 7:00 pm</li>
                  <li>Saturday</li>
                  <li>9:00 am to 2 noon</li>
                </ul>
                <div>Sunday by Appointment</div>
              </div>
            </div>

            


       </div>

    </div>


    
  </div>
  )
}

export default Dashboard
