import React, { useState, useEffect } from 'react';
import './Banner.css';
import '../../Pages/Home/Home.css'
import '../../Components/Animation.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Banner = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timeout = setTimeout(() => {
        setShowPopup(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [showPopup]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    textarea: '',
    number : ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!formData.name || !formData.email ||!formData.number ||  !formData.textarea) {
      alert('Please fill out all fields before submitting.');
      return;
    }


    // Process the form submission logic here
    console.log('Form submitted:', formData);

    try {
      // Make API call using Axios
      const response = await axios.post('https://thankful-teal-octopus.cyclic.app/api/messages', formData);
      console.log('API response:', response.data);

      // Handle success (optional)
      alert('Your Message has been successfully sent!');

      setFormData({
        name: '',
        email: '',
        textarea: '',
        number: '',
      });  

    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };


  return (
    <div  className="main-banner h-auto">
      <div className="w-full container mx-auto md:px-6">
        <div className="flex flex-col md:flex-row justify-between py-6 md:py-24 animation-from-left">

          <div  className=" md:mt-0 fade-up-element mb-10 w-full md:w-7/12 px-6 md:px-3 lg:px-6">
            <h1  className="text-2xl  font-bold color-yellow-text">Optimize Functionality.</h1>
            <h2 className="mb-6 text-3xl text-white font-bold">
              <span className='mb-6'>Enhance User Experience</span> <br />Captivate Traffic With  <br />Amazon Marketing Services.
            </h2>
            <h2 className="mb-6 text-xl font-bold color-yellow-text">Elevate Your Business With Professional Amazon Store Setup And Management Solutions.</h2>
            <p className="mb-6 text-white dark:text-neutral-300">
            We Bring Innovation And Expertise To Amplify Your Online Presence And Drive Unparalleled Growth. Our Devoted Team Of Experts Are Committed To Guide You Through Each Step Of The Amazon Journey, From Strategic Store Setup To Comprehensive Management Services Focusing Optimization.
            </p>
            <Link to={'/Contact-us'}>
              <button  className="backgroundcolor-yellow w-full md:w-auto text-white font-bold py-2 px-4 rounded-full mb-4 md:mr-2">
                Live Chat
              </button>
            </Link>
            <button onClick={() => window.open('tel:+17373591874')} className="backgroundcolor-yellow w-full md:w-auto text-white font-bold py-2 px-4 rounded-full">
  +1 (737) 359-1874
</button>


          </div>

          <div  className='backgroundcolor-yellow fade-up-element w-full md:w-1/3 pt-4 md:ml-6 rounded-2xl'>
          <form className="px-4"   onSubmit={handleSubmit}   >
              <div className='flex flex-col justify-center'>
                <h2 style={{ color: '#000000' }} className="mb-2 text-xl font-bold">GET A PROPOSAL</h2>
                <p className="w-full mb-6 text-black dark:text-neutral-300">
                  Increase your Amazon store sales with our proven marketing strategies.
                </p>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
              <input
 type="text"
 id="name"
 autoComplete="given-name"
 placeholder="Full Name"
 className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
 name="name"
 value={formData.name}
 onChange={handleInputChange}
/>

              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                 type="email"
                 id="email"
                 autoComplete="email"
                 placeholder="Email Address"
                 className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                 name="email"
                 value={formData.email}
                 onChange={handleInputChange}
                />
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                 type="Phone Number"
                 id="Phone Number"
                 autoComplete="Phone Number"
                 placeholder="Phone Number"
                 className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                 name="number"
                 value={formData.number}
                 onChange={handleInputChange}
                />
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea

id="textarea"
name="textarea"
rows="3"
placeholder="Write your message..."
className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
value={formData.textarea}
onChange={handleInputChange}

/>

              </div>

              <button
                 type="submit"
                style={{ background: '#000000' }}
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mb-6 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                Get Free Consultation 
              </button>
            </form>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <p>Form submitted successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Banner;
