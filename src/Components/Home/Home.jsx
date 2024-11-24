
// import React, { useEffect, useState } from 'react';
// import './Home.css'
// import Tailoring from './Tailoring.mp4';
// import {Button } from 'react-bootstrap';

// import Heroimage1 from './HeroImages/Hero_Image1.jpg'
// import Heroimage2 from './HeroImages/Hero_Image2.jpg'
// import Heroimage3 from './HeroImages/Hero_Image3.jpg'
// import Heroimage4 from './HeroImages/Hero_Image4.jpg'
// import Heroimage5 from './HeroImages/Hero_Image5.png'
// import Heroimage6 from './HeroImages/Hero_Image6.png'

// const Home = () => {
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);

//   // To trigger when video is loaded and remove controls
//   const handleVideoLoad = () => {
//     setIsVideoLoaded(true);
//   };

//   return (
//     <>


//       <div style={{ position: 'relative', width: '100%', height: 'auto' }} className='' >

//         <video
//           width="100%"
//           loop
//           autoPlay
//           muted
//           onCanPlay={handleVideoLoad} // Trigger when video is ready to play
//           style={{
//              filter: 'brightness(100%)', width: '100%', height: 'auto' }}
         
//         >
//           <source src={Tailoring} type="video/mp4" />
//         </video>

//         {/* Overlay div on top of video */}
//         <div
//           style={{
//             position: 'absolute',
//             top: '0',
//             left: '0',
//             width: '100%',
//             height: '100%',
//             display: isVideoLoaded ? 'flex' : 'none', 
//             // Only show overlay once video is loaded
//             // justifyContent: 'center',
//             alignItems: 'center',
//             color: 'white',
//             // textAlign: 'center',
//             // fontSize: '2rem',
//             fontWeight: 'bold',
//             backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            
//           }}
//         >
//           <div className='container'>

//             <input type="text" placeholder='Enter Location' className='p-2 w-50' />
//             <h1 className='tailorsh1'>Tailors Connect</h1>
//             <p className='tailorsp'>Connecting skilled tailors with customers who value quality, style, and convenience.</p>
//             {/* <button className='px-sm-4 py-sm-2  px-3 py-1 rounded-5 bg-transparent border-2 border-danger text-white fw-light'>Join Now</button><br /> */}
//             <Button variant="outline-danger"
//              href="#register"
//              className='px-sm-4 py-sm-2  px-3 py-1 rounded-5 text-white fw-light'
//              >
//               Join Now
//             </Button>

//           </div>

//         </div>


//       </div>



//      <div className="container-fluid">
//         <div className="container">
             
         
//          <div className="row row-gap-5 py-5">
             
//             <div className="text-center ">
//               <h2>Tailor-Made Connections, Seamlessly</h2>
//             </div>

//             <div className="col-md-6">
//                 <h5 className='pb-2'>Your Stitching Needs Met</h5>
//                  <p>Bridging the gap between talented tailors and customers seeking custom-fit designs.</p>
//                  <img src={Heroimage1} alt="" className='img-fluid rounded-4 heroimage' />
//             </div>
//              <div className="col-md-6">
//                <h5 className='pb-2'>Discover Local Tailoring Talent</h5>
//                <p>Tailors can display their expertise, while customers can easily find the perfect match for their unique stitching requirements.</p>
//                <img src={Heroimage2} alt="" className='img-fluid rounded-4 heroimage' />
//              </div>
//          </div>

//          {/* <div className="row row-gap-4 ">
//             <div className="col-md-6">
//                <img src={Heroimage1} alt="" className='img-fluid rounded-4 heroimage' />
//             </div>

//             <div className="col-md-6">
//             <img src={Heroimage2} alt="" className='img-fluid rounded-4 heroimage' />
//             </div>
//          </div> */}
         

//          <div className="row py-5 row-gap-5">
             
//              <div className="text-center">
//                <h2>Who We Are</h2>
//              </div>
 
//              <div className="col-md-6">
//                   <h5 className='pb-2'>Connecting Tailors To Customers</h5>
//                   <p>We are dedicated to connecting skilled tailors with customers looking for bespoke clothing solutions.</p>
//                   <img src={Heroimage3} alt="" className='img-fluid rounded-4 heroimage' />
//              </div>
//               <div className="col-md-6">
//                 <h5 className='pb-2'>Connecting Customers To Tailors</h5>
//                 <p>Our platform makes it easy for customers to find local tailors and for tailors to grow their business.</p>
//                 <img src={Heroimage4} alt="" className='img-fluid rounded-4 heroimage' />
//               </div>
//           </div>


//           <div className="row py-5">
             
//              <div className="text-center pb-5">
//                <h2>How It Works</h2>
//              </div>
 
//              <div className="col-md-6">
//                  <h6 className='pb-2'>
//                    Steps for Customers:
//                 </h6>
//                 <ul>
//                   <li><span>Search for Tailors</span>: Filter By location, specialty, or ratings.</li>
//                   <li className='py-2'><span>Connect & Discuss</span>: Share your design ideas and preferences.</li>
//                   <li><span>Get Your Fit</span>: Receive high-quality, custom-made clothing.</li>
//                 </ul>
//                  <div className='d-flex justify-content-center'>
//                  <img src={Heroimage5} alt="" className="img-fluid" />
//                  </div>
//              </div>

//              <div className="col-md-6">
//                  <h6 className='pb-2'>
//                     Steps for Tailors:
//                  </h6>
//                  <ul>
//                   <li><span>Create Your Profile</span>: Showcase your skills, services and portfolio.</li>
//                   <li className='py-2'><span>Receive Requests</span>: Connect with customers seeking your expertise.</li>
//                   <li><span>Grow Your Business</span>: Build trust and expand your client base.</li>
//                 </ul>
//                 <div className='d-flex justify-content-center'>
//                  <img src={Heroimage6} alt="" className="img-fluid" />
//                  </div>
//               </div>
          
//           </div>


//         </div>
//      </div>


//     </>
//   );
// };

// export default Home;









import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // To navigate programmatically
import './Home.css'
import { IoMdArrowForward } from "react-icons/io";
// import Tailoring from './Tailoring.mp4';
import Tailoringgif from './Tailor2.gif';
import Heroimage1 from './HeroImages/Hero_Image1.jpg';
import Heroimage2 from './HeroImages/Hero_Image2.jpg';
import Heroimage3 from './HeroImages/Hero_Image3.jpg';
import Heroimage4 from './HeroImages/Hero_Image4.jpg';
import Heroimage5 from './HeroImages/Hero_Image5.jpg';
import Heroimage6 from './HeroImages/Hero_Image6.jpg';
import Heroimage7 from './HeroImages/Hero_Image7.png';
import Heroimage8 from './HeroImages/Hero_Image8.png';
import Heroimage9 from './HeroImages/Hero_Image9.png';
import icon1 from './HeroImages/icon1.png';

import { IoSearch } from "react-icons/io5";
import { MdConnectWithoutContact } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { RiUserReceived2Line } from "react-icons/ri";
import { TbBusinessplan } from "react-icons/tb";


const Home = () => {
  const [location, setLocation] = useState('');  // State to hold location input
  const navigate = useNavigate();  // Hook to programmatically navigate

  const handleLocationChange = (e) => {
    setLocation(e.target.value);  // Update location state on input change
  };

  const handleSearch = () => {
    if (location) {
      // Navigate to another page/component and pass location as a URL parameter
      navigate(`/search/${location}`);
    }
  };

  const glassStyle = {
    borderRadius: '10px',
    padding: '15px'
  };

  return (
    <>

      {/* <div style={{ position: 'relative', width: '100%', height: 'auto' }} className='' >
        <video width="100%" loop autoPlay muted style={{
             filter: 'brightness(100%)', width: '100%', height: 'auto' }}>
          <source src={Tailoring} type="video/mp4" />
        </video>

        <div  className="transparent-bg" style={{
          position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
          display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white',
       
        }}>
          <div className='container'>
             <div className='d-flex column-gap-3'>
             <input 
              type="text" 
              placeholder='Enter Location' 
              className=' w-50 form-control' 
              value={location}
              onChange={handleLocationChange} 
            />
             <Button 
              variant="outline-danger"
              onClick={handleSearch}  // Trigger search and navigate
              className='px-sm-4 py-sm-2  px-3 py-1 rounded-5 text-white fw-light'
            >
              Search
            </Button>
             </div>
             <h1 className='tailorsh1 pt-3'>Tailors Connect</h1>
             <p className='tailorsp'>Connecting skilled tailors with customers who value quality, style, and convenience.</p>
           
          </div>
        </div>

      </div> */}
        {/* <video width="100%" loop autoPlay muted style={{
             filter: 'brightness(100%)', width: '100%', height: 'auto' }}>
          <source src={Tailoring} type="video/mp4" />
        </video> */}

    {/*  */}
    {/* <div >

   

    <div style={{ position: 'relative', width: '100%', height: 'auto'}} className='' >

         <img src={Tailoringgif} alt="" className='tailored img-fluid' />

        <div  className="transparent-bg" style={{
          position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
          display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white',
       
        }}>
          <div className='container'>
             <div className='d-flex column-gap-3'>
             <input 
              type="text" 
              placeholder='Enter Location' 
              className=' w-50 form-control' 
              value={location}
              onChange={handleLocationChange} 
            />
             <Button 
              variant="outline-success"
              onClick={handleSearch}  // Trigger search and navigate
              className='px-sm-4 py-sm-2  px-3 py-1 rounded-5 text-white fw-light'
            >
              Search
            </Button>
             </div>
             <h1 className='tailorsh1 py-md-4 py-3 text-primary'>Tailors Connect</h1>
             <p className='tailorsp text-danger'>Connecting skilled tailors with customers who value quality, style, and convenience.</p>
           
          </div>
        </div>

      </div>

      
      <div className="container"style={{position:"relative",bottom:"55px"}} >
      <div className="row  row-gap-4 justify-content-around">
        <div className="col-lg-3 col-md-5 col-10 "style={glassStyle}>
          <div className='text-center'>
          <h4 className='text-white'>Showcase Your Skills</h4>
          <p>Tailors can display their talents and services.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-5 col-10 pt-3" style={glassStyle}>
        <div className='text-center'>
          <h4 className='text-white'>Tailor Services</h4>
          <p>Customer-Friendly Platform.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-5 col-10 pt-3" style={glassStyle}>
        <div className='text-center'>
          <h4 className='text-white'>Find Your Tailor</h4>
          <p>Easily connect with tailors for your needs.</p>
          </div>
        </div>
      </div>
      </div>
      
      

      </div> */}
    {/*  */}


    <div style={{ position: 'relative', width: '100%' }}>

{/* Image and overlay (background section) */}
<div style={{ position: 'relative', width: '100%', height: 'auto' }}>
  <img 
    src={Tailoringgif} 
    alt="Tailoring" 
    className="tailored img-fluid" 
    style={{
      width: '100%',
      height: 'auto',
      position: 'relative', // Image stays as background
      zIndex: 1, // Ensure the image is in the background
    }} 
  />

  {/* Overlay above the image */}
  <div 
    className="transparent-bg" 
    style={{
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      zIndex: 2, // Overlay sits above the image
    }}
  >
    <div className="container">
      <div className="d-flex column-gap-3">
        <input  
          type="text" 
          placeholder="Enter Location" 
          className="w-50 form-control bg-transparent border-2 forms" 
          value={location}
          onChange={handleLocationChange} 
        />
        <Button 
          variant="outline-success"
          onClick={handleSearch}  // Trigger search and navigate
          className="px-sm-4 py-sm-2 px-3 py-1 rounded-5 text-white fw-light"
        >
          Search
        </Button>
      </div>
      <h1 className="tailorsh1 py-md-4 py-3"style={{color:"orangered"}}>Tailors Connect</h1>
      <p className="tailorsp">
        Connecting skilled tailors with customers who value quality, style, and convenience.
      </p>
    </div>
  </div>
</div>

{/* Row content - Positioned outside of the image */}
  {/* <div 
    className="container" 
     style={{ 
    position: "relative", 
    zIndex: 3, 
    marginTop: '55px'}}>
     <div className="row row-gap-4 justify-content-around">
      <div className="col-lg-3 col-md-5 col-10 bg-danger " style={glassStyle}>
      <div className="text-center">
        <h4 className="text-white">Showcase Your Skills</h4>
        <p className='text-white-50'>Tailors can display their talents and services.</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-5 col-10  bg-success" style={glassStyle}>
      <div className="text-center">
        <h4 className="text-white">Tailor Services</h4>
        <p  className='text-white-50'>Customer-Friendly Platform.</p>
      </div>
    </div>
     <div className="col-lg-3 col-md-5 col-10 bg-primary" style={glassStyle}>
       <div className="text-center">
        <h4 className="text-white">Find Your Tailor</h4>
        <p  className='text-white-50'>Easily connect with tailors for your needs.</p>
      </div>
    </div>
  </div>
</div> */}

</div>


   
      {/* <div className="container-fluid">
        <div className="container" >
         <div className="row row-gap-5 py-5">
             
            <div className="text-center " >
              <h1>Tailor-Made Connections, Seamlessly</h1>
            </div>

           

           
            <div className="col-md-6">
                <h5 className='pb-2'>Your Stitching Needs Met</h5>
                 <p>Bridging the gap between talented tailors and customers seeking custom-fit designs.</p>
                 <img src={Heroimage1} alt="" className='img-fluid rounded-4 heroimage' />
            </div>
             <div className="col-md-6">
               <h5 className='pb-2'>Discover Local Tailoring Talent</h5>
               <p>Tailors can display their expertise, while customers can easily find the perfect match for their unique stitching requirements.</p>
               <img src={Heroimage2} alt="" className='img-fluid rounded-4 heroimage' />
             </div>

        

         </div>
         </div>
         </div>

    
         
         <div className="container-fluid">
        <div className="container" >
         <div className="row py-5 row-gap-5">
             
             <div className="text-center">
               <h2>Who We Are</h2>
             </div>
 
             <div className="col-md-6">
                  <h5 className='pb-2'>Connecting Tailors To Customers</h5>
                  <p>We are dedicated to connecting skilled tailors with customers looking for bespoke clothing solutions.</p>
                  <img src={Heroimage3} alt="" className='img-fluid rounded-4 heroimage' />
             </div>
              <div className="col-md-6">
                <h5 className='pb-2'>Connecting Customers To Tailors</h5>
                <p>Our platform makes it easy for customers to find local tailors and for tailors to grow their business.</p>
                <img src={Heroimage4} alt="" className='img-fluid rounded-4 heroimage' />
              </div>
          </div>
          </div>
          </div>

          
          <div className="container-fluid">
        <div className="container" >
          <div className="row py-5">
             
             <div className="text-center pb-5">
               <h2>How It Works</h2>
             </div>
 
             <div className="col-md-6">
                 <h6 className='pb-2'>
                   Steps for Customers:
                </h6>
                <ul>
                  <li><span>Search for Tailors</span>: Filter By location, specialty, or ratings.</li>
                  <li className='py-2'><span>Connect & Discuss</span>: Share your design ideas and preferences.</li>
                  <li><span>Get Your Fit</span>: Receive high-quality, custom-made clothing.</li>
                </ul>
                 <div className='d-flex justify-content-center'>
                 <img src={Heroimage5} alt="" className="img-fluid" />
                 </div>
             </div>

             <div className="col-md-6">
                 <h6 className='pb-2'>
                    Steps for Tailors:
                 </h6>
                 <ul>
                  <li><span>Create Your Profile</span>: Showcase your skills, services and portfolio.</li>
                  <li className='py-2'><span>Receive Requests</span>: Connect with customers seeking your expertise.</li>
                  <li><span>Grow Your Business</span>: Build trust and expand your client base.</li>
                </ul>
                <div className='d-flex justify-content-center'>
                 <img src={Heroimage6} alt="" className="img-fluid" />
                 </div>
              </div>
          
          </div>
            </div>
         </div> */}


     
<div className="container-fluid py-5">
    <div className="container">
        <div className="row justify-content-around row-gap-5 ">
            <div className="text-center">
                <h2 className="display-6" style={{color:"orangered"}}>Tailor-Made Connections, Seamlessly</h2>
            </div>

            <div className="col-lg-5">
                 <div className=''>
                 <h5 className='pb-2 text-black'>Your Stitching Needs Met</h5>
                 <p>Bridging the gap between talented tailors and customers seeking custom-fit designs and satisfies the customers requirements.</p>
                 </div>
                
                 <img src={Heroimage1} alt="" className='img-fluid  heroimage ' />
              
            </div>
            <div className="col-lg-5">
                 <div className=''> 
                 <h5 className='pb-2 text-black'>Discover Local Tailoring Talent</h5>
                 <p>Tailors can display their expertise, while customers can easily find the perfect match for their unique stitching requirements.</p>
                 </div>
                <img src={Heroimage2} alt="" className='img-fluid  heroimage w-100' />
            </div>
        </div>
    </div>
</div>

<div className="container-fluid py-5 bg-white">
    <div className="container">
        <div className="row justify-content-around row-gap-5 ">
            <div className="text-center">
                <h2 className=" display-6" style={{color:"orangered"}}>Who We Are</h2>
            </div>

            <div className="col-lg-5">
               <div className=''>
               <h5 className='pb-2 text-black'>Connecting Tailors To Customers</h5>
               <p>We are dedicated to connecting skilled tailors with customers looking for bespoke clothing solutions.</p>
               </div>
                <img src={Heroimage3} alt="" className='img-fluid  heroimage ' />
            </div>
            <div className="col-lg-5">
                <div className=''>
                <h5 className='pb-2 text-black'>Connecting Customers To Tailors</h5>
                <p>Our platform makes it easy for customers to find local tailors and for tailors to grow their business.</p>
                </div>
                <img src={Heroimage4} alt="" className='img-fluid  heroimage ' />
            </div>
        </div>
    </div>
</div>

{/* <div className="container-fluid py-5">
    <div className="container">
        <div className="row justify-content-around row-gap-5">
            <div className="text-center">
                <h2 className=" display-6" style={{color:"orangered"}}>How It Works</h2>
            </div>

            <div className="col-md-5">
                <h5 className='pb-2 text-black'>Steps for Customers:</h5>
                <ul className='list-unstyled'>
                    <li><span className="text-muted">Search for Tailors:</span> Filter by location, specialty, or ratings.</li>
                    <li className='py-2'><span className="text-muted">Connect & Discuss:</span> Share your design ideas and preferences.</li>
                    <li><span className="text-muted">Get Your Fit:</span> Receive high-quality, custom-made clothing.</li>
                </ul>
               
                <marquee behavior="" direction="">
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}/>
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}/>
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}/>
                  <img src={icon1} alt="" />
                </marquee>
            </div>

            <div className="col-md-5">
                <h5 className='pb-2 text-black'>Steps for Tailors:</h5>
                <ul className='list-unstyled'>
                    <li><span className="text-muted">Create Your Profile:</span> Showcase your skills, services, and portfolio.</li>
                    <li className='py-2'><span className="text-muted">Receive Requests:</span> Connect with customers seeking your expertise.</li>
                    <li><span className="text-muted">Grow Your Business:</span> Build trust and expand your client base.</li>
                </ul>
             
                
                <marquee behavior="" direction="">
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}/>
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}/>
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}/>
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}/>
                  <img src={icon1} alt="" />
                </marquee>

            </div>
        </div>
    </div>
</div> */}


<div className="container-fluid py-5">
  <div className="container">
     <div className="row justify-content-around row-gap-5">
     <div className="text-center">
                <h2 className=" display-6" style={{color:"orangered"}}>How It Works</h2>
            </div>
      <div className="col-lg-5">
      <h5 className='pb-2 text-black'>Steps for Customers:</h5>
                <ul className='list-unstyled'>
                    <li className=''><span className="fw-medium">< IoSearch  style={{color:"orangered"}}  /> Search for Tailors:</span> <span className="text-muted ">Filter by location, specialty, or ratings.</span></li>
                    <li className='py-2'><span className="fw-medium"><MdConnectWithoutContact  style={{color:"orangered"}} /> Connect & Discuss:</span> <span className="text-muted ">Share your design ideas and preferences</span>.</li>
                    <li><span className="fw-medium"><GiClothes  style={{color:"orangered"}} /> Get Your Fit:</span> <span className="text-muted "> Receive high-quality, custom-made clothing.</span></li>
                </ul>
      </div>
      <div className="col-lg-5">
      <marquee behavior="" direction="">
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}/>
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}/>
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}/>
                  <img src={icon1} alt="" />
        </marquee>
      </div>
     </div>
  </div>
</div>

    
<div className="container-fluid py-5">
  <div className="container">
     <div className="row justify-content-around row-gap-5">
      <div className="col-lg-5 order-lg-first order-last">
      <marquee behavior="" direction="">
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}/>
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}/>
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}/>
                  <img src={icon1} alt="" />
                  <IoMdArrowForward size={30}/>
                  <img src={icon1} alt="" />
                </marquee>
      </div>
      <div className="col-lg-5">
      <h5 className='pb-2 text-black'>Steps for Tailors:</h5>
                <ul className='list-unstyled'>
                    <li className=""><span className='fw-medium'><CgProfile  style={{color:"orangered"}}  /> Create Your Profile: </span><span className="text-muted ">Showcase your skills, services, and portfolio.</span></li>
                    <li className='py-2'> <span className="fw-medium"><RiUserReceived2Line  style={{color:"orangered"}}  /> Receive Requests:</span> <span className="text-muted ">Connect with customers seeking your expertise.</span></li>
                    <li> <span className="fw-medium"><TbBusinessplan  style={{color:"orangered"}} /> Grow Your Business:</span><span className="text-muted"> Build trust and expand your client base.</span></li>
                </ul>
      </div>
     </div>
  </div>
</div>
    


    </>
  );
};

export default Home;




