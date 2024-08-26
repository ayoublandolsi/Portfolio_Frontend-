import "./CardImage.css";
import { FiLinkedin, FiGithub,  FiFacebook, FiInstagram, FiMail } from 'react-icons/fi';
import ayoub from "../../assets/images/Ayoublabdol-eb76e0a8.jpg"
import { Typewriter , Cursor } from 'react-simple-typewriter';
import { Link } from "react-router-dom";

  export default function CardImage() {

    return (
<>
<section className="homw">
    <div className="home-content">
        <h3 className="h134">Hello, It's Me</h3>
            <h1 className="h13 ">
                Ayoub Landolsi
            </h1>
            <h3 className="h134">
          And I'am a <br/> {''}
          <span className="spannnn" style={{ fontWeight: 'bold', color:'#11a372' }}>
          <Typewriter
            words={[ 'Business Intelligence', 'Front-end Developer', 'Back-end Developer',' builder']}
            loop={true}
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={1000}

          />
          </span>{' '}
          <span className='text-[#11a372]'><Cursor  /></span>

        </h3>
         <p className="pergraph text-justify mr-20">
         As a Full Stack developer, I have a strong expertise in application development and business intelligence, reinforced by my experience as a "builder" in the construction industry.

</p>
<div className="home-sci">
<a href="https://github.com/ayoublandolsi" style={{'--i':1}} target="_blank" rel="noopener noreferrer" className="a text-gray-700 hover:text-gray-300  ">
    <FiGithub fontSize={23} />
  </a>


  <a href="https://www.instagram.com/ayoublnls/" target="_blank" rel="noopener noreferrer" style={{'--i':2}} className="a text-gray-700 hover:text-red-500">
    <FiInstagram fontSize={23} />
  </a>
  <a href="https://www.linkedin.com/in/ayoub-landolsi-665a5b234" target="_blank" rel="noopener noreferrer" style={{'--i':3}} className="a text-gray-700 hover:text-sky-700  ">
    <FiLinkedin fontSize={23} />
  </a>
  <a href="mailto:ayoublandolsi@gmail.com" className="text-gray-700 hover:text-yellow-500">
    <FiMail fontSize={23} />
  </a>
  <a href="https://www.facebook.com/profile.php?id=100093560836" target="_blank" rel="noopener noreferrer" style={{'--i':4}} className="atext-gray-700 hover:text-sky-500">
    <FiFacebook fontSize={23} />
  </a>
</div>
<Link to="/about"  className="btn-boxx">More About Me</Link>

    </div>
    <div className='taswira h-60 w-60 border border-solid border-black rounded-full  '> <img className=' h-40 w-40' src={ayoub} /> </div>


</section>




     {/* <div className="flex justify-center items-center h-screen  rounded-xl   bg-black  ">
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className="md:w-1/2  mx-5  md:p-8">
            <div className="text-6xl font-bold mb-8 text-white   ">
             I,am  Ayoub Landolsi
            </div>
            <div className="text-animation">
              <span className="animation-delay   text-sky-500 text-5xl">
                {textItems[currentIndex]}
              </span>
            </div>
            <div className=" mt-4 text-5xl text-white ">
             I,am a Full Stack Developer  UI/UX Enthusiast
            </div>
          </div>
          <div className="md:w-1/2  ">
            <img src={ayoub} alt="Ayoub Landolsi" className="w-full" />
          </div>
        </div>
    </div>*/}

      </>
    );

}


