import {React , useEffect} from 'react'
import { Link } from 'react-router-dom';

const Virtual_Assistant_Card = () => {



  useEffect(() => {
    const cards1 = document.querySelectorAll('.right-side');
    const cards2 = document.querySelectorAll('.left-side');
  
    const handleScroll = () => {
      cards1.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-from-right'); // Apply animation for class1
        }
      });
  
      cards2.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('element-to-animate'); // Apply animation for class2
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div>

<div className="w-full container mx-auto md:px-6">
  <div className="flex flex-col md:flex-row justify-between pt-10 animation-from-left">

  <div className='mt-20 md:mt-0 right-side w-full md:w-1/3 pt-4 md:ml-6 rounded-2xl'>
      <img
        src="https://www.amzinventor.com/images/InventoryManagement.png"
        alt=""
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>

    <div className="left-side mb-10 w-full md:w-7/12 px-6 md:px-3 lg:px-6">
      <h2 className="mb-6 text-3xl text-black font-bold">
        <span className='mb-6'>AMAZON VA; INVENTORY MANAGEMENT</span></h2>
      <p className="mb-6 text-black dark:text-neutral-300">
      To automate your inventory, we consider the relevant factors and recommend fulfillment solutions. Amazon's virtual assistant is a great means to gradually scale your business on the world's largest e-commerce platform.
      </p>

      <div className='flex mt-2 flex-wrap text-black w-3/4	mb-4 justify-between' >
           <ul>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle mr-2 " aria-hidden="true"></i> Inventory level checks</li>
              <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle mr-2 " aria-hidden="true"></i>Inventory sourcing</li>
            </ul>
            <ul>
            <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle mr-2 " aria-hidden="true"></i>Re-order forecasts</li>
            <li   className='mb-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle mr-2 " aria-hidden="true"></i>Stock information</li>
            </ul>
           </div>
        


           <Link to={'/Contact-us'} >

<button   style={{"background" : "#FF9903"}} className="w-full md:w-auto  text-white font-bold py-2 px-4 rounded-full mb-4 md:mr-2">
  Live Chat
</button>
</Link>
      <button style={{ background: '#FF9903' }} className="w-full md:w-auto text-white font-bold py-2 px-4 rounded-full">
        +1 (737) 359-1874
      </button>
    </div>

   

  </div>
</div>

</div>
    </>
  )
}

export default Virtual_Assistant_Card