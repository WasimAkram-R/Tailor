import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { IoLogInOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'

import finallogo from './Finallogo.png'
import './Navbar.css'


const ResponsiveNavbar = () => {

    const [expanded, setExpanded] = useState(false); // For toggling the menu

    const toggleNavbar = () => setExpanded(!expanded);


  return (
    <>

<Navbar  expanded={expanded} expand="xl" style={{backgroundColor:"#333333"}} variant="light" sticky="top" className='' >
      <Container>
        {/* Logo/Brand on the left */}
        <Navbar.Brand className='text-white'>
          {/* <img src={nav} alt="" className='img-fluid' style={{width:"120px",height:"60px"}} />
          <span  style={{color:"orangered",fontSize:"30px",fontFamily:"cursive"}}>TailorsHub</span> */}
          <img src={finallogo} style={{width:"150px",height:"50px"}} className='img-fluid' alt="" />
        </Navbar.Brand>

        {/* Center Navigation Links */}
        <Navbar.Toggle
           style={{outline:"none",boxShadow:"none",border:"none",}}
          aria-controls="navbar-nav"
          onClick={toggleNavbar} // Toggle function on click
          className="d-xl-none" // Only show on mobile (hidden on large screens)
        >
          {expanded ? <FaTimes className='' style={{color:"orangered"}} size={24} /> : <FaBars size={24} className='' style={{color:"orangered"}}  />} {/* Change icon */}
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav" className=" justify-content-center w-100">
          <Nav className="mx-auto">

            <Nav.Link> <Link to="/" className='text-decoration-none text-white a'>Home</Link></Nav.Link>

            <Nav.Link href="#tailors"><Link to="/partner"className='text-decoration-none text-white a'>Partner With Us </Link></Nav.Link>

            <Nav.Link><Link to="/aboutus" className='text-decoration-none text-white a'>About Us</Link></Nav.Link> 

            <Nav.Link>
            <Link to="/contactus"className='text-decoration-none text-white a'>Contact Us</Link>
            </Nav.Link>

            <Nav.Link>
            <Link to="/faq"className='text-decoration-none text-white a'>FAQ</Link>
            </Nav.Link> 
            
          </Nav>
        </Navbar.Collapse>

        {/* Login/Register buttons, positioned on the right for large screens, center for small */}
        <Navbar.Collapse className="justify-content-end">
          <Nav className="d-none d-xl-flex">
            {/* These buttons will be displayed only on large screens */}
            {/* <Button variant="outline-primary" href="#login" className="me-2">
              Login
            </Button> */}
            <div className=''>
            <IoLogInOutline className='' style={{width:"30px",height:"30px",color:"orangered"}} />
            <span className='' style={{color:"orangered"}}>Login</span>
            </div>
            
              
          </Nav>

          {/* These buttons will be displayed only on small screens (mobile) */}
          <Nav className="d-flex d-xl-none justify-content-center">
           
          <div className=''>
            <span className='text-white'>Login</span>
            <IoLogInOutline className='text-white' style={{width:"30px",height:"30px"}} />
            </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default ResponsiveNavbar









