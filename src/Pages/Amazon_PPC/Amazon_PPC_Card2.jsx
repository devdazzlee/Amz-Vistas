import React from 'react'
import { Link } from 'react-router-dom'

const Amazon_PPC_Card2 = () => {
  return (
    <>
      <div>

<div className="w-full container mx-auto md:px-6">
  <div className="flex flex-col md:flex-row justify-between pt-10 animation-from-left">

  <div className="mt-20 md:mt-0 left-side mb-10 w-full md:w-7/12 px-6 md:px-3 lg:px-6">
      <h2 className="mb-6 text-3xl text-black font-bold">
        <span className='mb-6'>AMAZON PPC <br />
AMZ Inventor – Among The Leading Amazon PPC Agencies</span></h2>
      <p className="mb-6 text-black dark:text-neutral-300">
      AMZ Inventor makes sure that organizations achieve their marketing objectives by implementing clever ad placement and strategically utilizing Amazon PPC. We love to see your products appear in the searches of your target market with the help of our Amazon PPC management service. With our PPC Amazon solution, you may get the following:
      </p>

      


      <div className='flex mt-2 flex-wrap text-black w-3/4	mb-4 justify-between' >
           <ul>

        


              <li   className='mb-2 mr-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle mr-2 " aria-hidden="true"></i>Sponsored product ads</li>
              <li   className='mb-2 mr-2' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle mr-2 " aria-hidden="true"></i>Sponsored brand ads</li>

            </ul>
            
            


            <ul>
              <li   className='mb-2 ' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle mr-2 " aria-hidden="true"></i>Interest-based targeting</li>
              <li   className='mb-2 ' ><i  style={{"color" : "#FF9903"}} class="fa fa-check-circle mr-2 " aria-hidden="true"></i>Audience retargeting</li>
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

  <div className='right-side w-full md:w-1/3 pt-4 md:ml-6 rounded-2xl'>
      <img
        src="https://www.amzinventor.com/images/servcs-bnr-side-img26.png"
        alt=""
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>

    

   

  </div>
</div>

</div>
    </>
  )
}

export default Amazon_PPC_Card2