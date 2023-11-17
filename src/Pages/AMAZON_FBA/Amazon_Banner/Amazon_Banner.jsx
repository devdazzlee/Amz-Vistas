import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Amazon_Banner = () => {
  
  return (
    <div style={{ background: '#232F3F'  , paddingTop : "40px" }} className='main-banner '>

      <div className="w-full container mx-auto md:px-6">
        <div className="flex flex-col md:flex-row justify-between py-6 md:py-24 animation-from-left">

          <div className="mt-20 md:mt-0 fade-up-element mb-10 w-full md:w-7/12 px-6 md:px-3 lg:px-6">
            <h2 className="mb-6 text-3xl text-white font-bold">
              <span className='mb-6'>CUT YOUR TASKS LIST!</span></h2>
            <p className="mb-6 text-white dark:text-neutral-300">
            With the FBA (Fulfillment by Amazon) program, we ensure delivery of an entirely seamless and hassle-free e-commerce process that is automated for optimal performance. We take care of everything from labeling and packing to product warehousing and shipping.
            </p>
           <div className='flex flex-wrap text-white w-3/4	mb-4 justify-between' >
           <ul>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle" aria-hidden="true"></i> Dropshipping store designing</li>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle" aria-hidden="true"></i> Dropshipping marketing</li>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle" aria-hidden="true"></i> Niche selection</li>
            </ul>
            

            <ul>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle" aria-hidden="true"></i> Store Management</li>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle" aria-hidden="true"></i> Supplier & sourcing</li>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle" aria-hidden="true"></i> Visual ads</li>
            </ul>
           </div>

           <Link to={'/Contact-us'} >

<button   style={{"background" : "#FF9903"}} className="w-full md:w-auto  text-white font-bold py-2 px-4 rounded-full mb-4 md:mr-2">
  Live Chat
</button>
</Link>
            <button style={{ background: '#FF9903' }} className="w-full md:w-auto text-white font-bold py-2 px-4 rounded-full">
              +1 (773) 3124788
            </button>
          </div>

          <div className='fade-up-element w-full md:w-1/3 pt-4 md:ml-6 rounded-2xl'>
            <img
              src="https://www.amzinventor.com/images/ecom-store-bnr-side-img.png"
              alt=""
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Amazon_Banner;
