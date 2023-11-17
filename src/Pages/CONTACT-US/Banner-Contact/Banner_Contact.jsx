import React, { useEffect } from 'react';
import './Banner_Contact.css';
import '../../../Components/Animation.css'
import { Link } from 'react-router-dom';

const Banner_Contact = () => {
  return (
    <div  style={{"background" : "#232F3F" ,  paddingTop : "40px"}} className='main-banner h-auto'>

      <div className="w-full container mx-auto md:px-6">
        <div className="flex flex-col md:flex-row justify-between py-6 md:py-24 animation-from-left">

          <div className="mt-20 md:mt-0 fade-up-element mb-10 w-full md:w-7/12 px-6 md:px-3 lg:px-6">
            <h2 className="mb-6 text-3xl text-white font-bold">
              <span className='mb-6'>CONTACT US TO</span> <br /> UNLOCK AMAZON & E- <br />COMMERCE SUCCESS!</h2>
            <h2 style={{ "color": "#FF9903" }} className="mb-6 text-xl font-bold">Amazon Store Set-up & Management</h2>
            <p className="mb-6 text-white dark:text-neutral-300">
            Are you looking for top-of-the-line eCommerce and Amazon services? You're at the right place. Talk to our expert consultants today to hire our services amnd for all your concerns.
            </p>

            <Link to={'/Contact-us'} >

<button   style={{"background" : "#FF9903"}} className="w-full md:w-auto  text-white font-bold py-2 px-4 rounded-full mb-4 md:mr-2">
  Live Chat
</button>
</Link>
            <button   style={{"background" : "#FF9903"}} className="w-full md:w-auto  text-white font-bold py-2 px-4 rounded-full">
              +1 (773) 3124788
            </button>
          </div>

          <div  className='fade-up-element w-full md:w-1/3  md:ml-6 mb-16'>
            <img src="https://www.amzinventor.com/images/contact%20us%20solid.svg" alt="" />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Banner_Contact;
