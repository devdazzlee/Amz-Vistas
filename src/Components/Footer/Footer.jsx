import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import logo from '../../Images/Worldwide-logo.svg';
import logo from '../../Images/Asset 6.png'
import './Footer.css';

function Footer() {
  return (
    <footer className="text-white   md:px-6 px-6  sm:py-8 md:py-8  footer-image">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          <div className="mt-4 sm:col-span-1">
            <Link to={'/'}>
              <img    width={"150px"} src={logo} alt="WorldTour Logo" />
            </Link>
            <p className="text-sm py-4 sm:py-6 text-white">
            Let's turn your Billionaire dream into a reality together.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com" >
                <FontAwesomeIcon icon={faFacebook}   style={{"color" : "#FF9903"}} size="2x" />
              </a>
              <a href="https://www.twitter.com" >
                <FontAwesomeIcon icon={faTwitter}    style={{"color" : "#FF9903"}} size="2x" />
              </a>
              <a href="https://www.instagram.com" >
                <FontAwesomeIcon icon={faInstagram}   style={{"color" : "#FF9903"}} size="2x" />
              </a>
              <a href="https://www.linkedin.com" >
                <FontAwesomeIcon icon={faLinkedin}   style={{"color" : "#FF9903"}} size="2x" />
              </a>
            </div>
          </div>

          <div className="mt-8">
            <h2  style={{"color" : "#FF9903"}} className="text-2xl  font-bold mb-2">Services</h2>
            <ul className="mt-4 space-y-2">
              <li   className='text-white' >
                <Link to="/AMAZON-FBA">Amazon Store Creation</Link>
              </li>
              <li   className='text-white' >
                <Link to="/shopify-dropshipping">Amazon Product Hunting</Link>
              </li>
              <li   className='text-white' >
                <Link to="/shopify-dropshipping">EBC/A+ Content</Link>
              </li>
              <li   className='text-white' >
                <Link to="/AMAZON-FBA">Virtual Assistant</Link>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h2  style={{"color" : "#FF9903"}} className="text-2xl font-bold mb-2">Pages</h2>
            {/* <div className="border-b-2 border-red-600 w-10"></div> */}
            <ul className="mt-4 space-y-2">
            <li   className='text-white' >
                <Link to="/">Home</Link>
              </li>
              <li   className='text-white' >
                <Link to="/AMAZON-FBA">Amazon FBA Automation</Link>
              </li>
              <li   className='text-white' >
                <Link to="/about-us">About</Link>
              </li>
              <li   className='text-white' >
                <Link to="/Contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h2   style={{"color" : "#FF9903"}}  className="text-2xl font-bold mb-2">Address</h2>
            {/* <div className="border-b-2 border-red-600 w-10"></div> */}
            <ul className="mt-4 space-y-2">
              <li  className='text-white'   ><a href="#">+1 (737) 359-1874</a></li>
              <li  className='text-white'   ><a href="#">contact@amzvistas.com</a></li>
              <li  className='text-white'   ><a href="#">5900 Balcones Drive STE 100 Austin TX 78731</a></li>
              <Link to="/Contact-us">
      
              <li  className='text-white'   ><a href="#">Get a Quote</a></li>
               </Link>

               <Link to="/FAQ">


              <li  className='text-white'   ><a href="#">Privacy Policy</a></li>
               </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <hr className="w-4/5 sm:w-3/5 border border-gray-300" />
      </div>

      <div className="flex flex-col justify-center items-center ">
  <div className="text-sm text-white mt-2 font-2xl">
    <Link to="https://radiantcortex.com/" target="_blank">
      &copy; 2023 <span style={{ textDecoration: "underline" }}>Radiant Cortex</span>. All rights reserved.
    </Link>
  </div>
</div>

    </footer>
  );
}

export default Footer;
