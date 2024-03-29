import {React  , useEffect} from 'react';
import '../../Components/Animation.css'
import { Link } from 'react-router-dom';

const ContactDiv = () => {

  const whatsappNumber = '+17373591874';
  const openWhatsapp = () => {
    window.location.href = `https://wa.me/${whatsappNumber}`;
  };

  useEffect(() => {
    const cards = document.querySelectorAll('.animate-bottom-call');

    const handleScroll = () => {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-up-element');
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
      <div style={{ "background": "#1E2834" }} className='animate-bottom-call flex  m-auto my-16 p-8 md:w-9/12 sm:w-full'>
        <div>
          <h1 className=' text-4xl font-bold'>
            <span style={{ "color": "#FF9901" }}>Still Confused ?</span>    
            {/* <span style={{ "color": "#FF9901" }}>NEED A</span> <br /> <span style={{ "color": "#FF9901" }}>QUOTE?</span> */}
          </h1>
          <p className='w-full sm:w-8/12 text-white mt-4'>We are always grateful to receive inquiries. Tell us what's confusing you, and one of our consultants will look for an answer.</p>
        </div>
        <div className='w-96	  flex flex-col sm:flex-row justify-between items-center mt-4'>

        <Link onClick={openWhatsapp} target="_blank">
  <button style={{"background" : "#FF9D1D" , "color" : "#1E2834" , "fontFamily" : "sans-serif" , "width" : "max-content" }} className=" ml-6 md:mt-0 mt-12  text-white font-bold py-6 px-8 rounded-xl">
    Call Now   <i class="fa fa-phone " aria-hidden="true"></i>
  </button>
</Link>

          <Link   to={'/Contact-us'}>
          
          <button   style={{"background" : "#FF9D1D" , "color" : "#1E2834" , "fontFamily" : "sans-serif" }} className="w-auto md:w-max   ml-6 md:mt-0 mt-12  text-white font-bold py-6 px-8 rounded-xl">
          Get A Quote <i class="fa-solid fa-message "></i>
              </button>


            
            </Link>
         
      
        </div>
      </div>
    </>
  );
};

export default ContactDiv;
