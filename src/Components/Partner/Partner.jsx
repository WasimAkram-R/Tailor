import React from 'react'
import './Partner.css'
import partnerimg1 from './partner1.png'
import partnerimg2 from './partner2.png'
// styl={{backgroundColor:"#f8f0fb"}}
const Partner = () => {
  return (
    <>
     
        

      <div className="overlaydiv">
      <img src={partnerimg1} className='img-fluid overlayimg' alt="" />  


       <div className="content w-100 ">
       <h1 className=''>Expand Your Reach</h1>
       <h1 className='py-2 text-white-50'>Connect Your Tailoring Business with TailorsHub</h1>
         
        {/* <div className='row gap-3 justify-content-center'>
        <div className='col-md-4 col-10 p-md-4 pt-2  glass-effect bg-primary text-white'>
        <p>Grow Your Tailoring Business with a Powerful Online Presence!</p>
        </div>
        <div className='col-md-4 col-10 p-md-4 pt-2 glass-effect bg-danger text-white'>
        <p>Connecting Tailors to Website Owners for Custom Digital Solutions.</p>
        </div>
        </div> */}

       </div>

      </div>



<div className="container-fluid py-5">
  <div className="container ">

    {/* About TailorsHub Section */}
    <div className="row row-gap-md-5 row-gap-4 justify-content-around align-items-center">
     <div className='col-lg-5'>
      <div className='d-flex flex-column justify-content-lg-center h-100' >
      <h2 className="pb-2 display-6" style={{color:"orangered"}}>About TailorsHub:</h2>
      <p className="">Are you a tailor looking to showcase your skills to a wider audience? At TailorsHub, we offer an exclusive platform for talented tailors like you to connect with potential clients online. Our website helps you create a strong online presence and attract more customers.</p>
      </div>
     </div>
     <div className="col-lg-5">
        <img src={partnerimg2} className='img-fluid  w-100' alt="" />
     </div>
    </div>

    </div>
  </div>
    

    <div className="container-fluid bg-white py-5">
    <div className="container">
    {/* Benefits for Tailors Section */}
    <div className="row row-gap-md-5 row-gap-4 justify-content-around align-items-center">
      <div className="col-lg-5 order-lg-first order-last">
      <img src={partnerimg2} className='img-fluid  w-100' alt="" />
      </div>
      <div className="col-lg-5">
      <h2 className="pb-2 display-6"style={{color:"orangered"}}>Benefits For Tailors:</h2>
      <div className="col">
        <ul className="list-unstyled">
          <li><span className="fw-bold">Showcase Your Design:</span> Display your best designs and creations to a growing audience.</li>
          <li className="my-2"><span className="fw-bold">Gain Visibility:</span> Reach customers in your locality and beyond.</li>
          <li><span className="fw-bold">Easy Communication:</span> Receive inquiries and collaborate with clients effortlessly.</li>
          <li className="my-2"><span className="fw-bold">Business Growth:</span> Increase your customer base and grow your revenue.</li>
          <li><span className="fw-bold">Custom Websites:</span> Designed specifically to highlight your skills and services.</li>
        </ul>
      </div>
      </div>
    </div>
    </div>
    </div>
 
    <div className="container-fluid py-5" >
  <div className="container ">

    {/* Why Partner With Us Section */}
    <div className="row row-gap-md-5 row-gap-4 justify-content-around align-items-center">
       <div className="col-lg-5">
       <h2 className="pb-2 display-6"style={{color:"orangered"}}>Why Partner With Us?</h2>
      <div className="col">
        <ul className="list-unstyled">
          <li><span className="fw-bold">User-Friendly Interface:</span> An easy-to-use platform tailored to your needs.</li>
          <li className="my-2"><span className="fw-bold">Marketing Support:</span> Promote your services through targeted campaigns.</li>
          <li><span className="fw-bold">Tailor-First Focus:</span> Dedicated features for tailor showcase and customer reviews.</li>
          <li className="mt-2"><span className="fw-bold">Take Orders:</span> Get a professional platform to display your work and take orders.</li>
        </ul>
      </div>
       </div>
       <div className="col-lg-5">
       <img src={partnerimg2} className='img-fluid  w-100' alt="" />
       </div>
    </div>
    </div>
    </div>

    <div className="container-fluid bg-white py-5">
    <div className="container ">

    {/* How It Works Section */}
    <div className="row row-gap-md-5 row-gap-4 justify-content-around">
      <div className="col-lg-5  order-lg-first order-last">
      <img src={partnerimg2} className='img-fluid  w-100' alt="" />
      </div>
      <div className="col-lg-5">
      <h2 className="pb-2 display-6"style={{color:"orangered"}}>How It Works:</h2>
      <div className="col">
        <ul className="list-unstyled">
          <li><span className="fw-bold">Tailors Profiles:</span> Tailors login and share their needs for an online presence to TailorsHub platform.</li>
          <li className="my-2"><span className="fw-bold">Website Owners:</span> Explore tailor profiles and pitch your services.</li>
          <li><span className="fw-bold">Collaborate:</span> Create custom websites that align with the tailor's vision and business goals.</li>
          <li className="mt-2"><span className="fw-bold">Gain Visibility:</span> Reach customers in your locality and beyond, and take orders.</li>
        </ul>
      </div>
      </div>
    </div>
    </div>
    </div>
  
    <div className="container-fluid py-5">
    <div className="container ">
    {/* Contact Us Section */}
    <div className="row row-gap-5  justify-content-around align-items-center">
      {/* Left Column: Call to Action */}
      <div className="col-md-5">
        <h2 className="pb-2 display-6 "style={{color:"orangered"}}>Contact Us</h2>
        <h6 className="pb-3">Ready to collaborate with TailorsHub?</h6>
        <button className="btn btn-primary px-4 py-2 rounded-5">Get Started</button>
      </div>

      {/* Right Column: Contact Form */}
      <div className="col-md-5">
        <form className="partnerform">
          <div className="mb-3">
            <input type="text" placeholder="Enter Your Name" className="form-control p-3 partnerinput" />
          </div>

          <div className="mb-3">
            <input type="email" placeholder="Enter Your Email" className="form-control p-3 partnerinput" />
          </div>

          <div className="mb-3">
            <input type="tel" placeholder="Enter Your Number" className="form-control p-3 partnerinput" />
          </div>

          <div className="mb-3">
            <textarea placeholder="Type Your Message/Inquiry Here" className="form-control p-3 partnertextarea" rows={5}></textarea>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>


    </>
  )
}

export default Partner