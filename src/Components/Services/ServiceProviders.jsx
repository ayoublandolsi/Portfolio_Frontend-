import React, { useEffect, useState } from 'react';
import './ServiceProviders.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faChartBar, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { Title } from '../../Views/Project';
import { Buttonn } from '../button/Button';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../Contexts/ContextProvider';

function ServiceProviders() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elementTop = document.getElementById('serviceProviders').getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight) {
        setAnimate(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const {user}=useStateContext;

  return (
    <>
      <Title title="Our Services" stittle="this is my services you can call" className=" ser mt-8 mb-8" />

      <div className={`service ${animate ? 'animate' : ''}`} id="serviceProviders">
        <div className="content">
          <div className={`cards ${animate ? 'animate' : ''}`}>
            <div className="carddd">
              <div className="sbox">
                <FontAwesomeIcon icon={faCode} className="icon" />
                <h3 className="titre font-medium">Development web</h3>
                <p>Ayoub excels in web development, and you can trust in his expertise to bring your ideas to life. Reach out to him to craft your website. Contact now!</p>
                <div className="buttonn ml-[-8px] relative">
                    {user ?(<Link to="/client/Contact">
  <Buttonn text="Contact Me" className="salih mx-[90px] my-0 rounded-3xl" />
</Link> ):      (         <Link to="/Contact">
  <Buttonn text="Contact Me" className="salih mx-[90px] my-0 rounded-3xl" />
</Link>   )}
              </div>
              </div>
            </div>
            <div className="carddd">
              <div className="sbox sbo">
                <FontAwesomeIcon icon={faChartBar} className="icon" />
                <h3 className="titre font-medium">Business intelligence</h3>
                <p>Trust Ayoub for insightful business intelligence. Let his skills turn data into valuable assets for your company. Contact him today!</p>
                <div className="buttonn ml-[-8px] relative ">
                {user ?(<Link to="/client/Contact">
  <Buttonn text="Contact Me" className="salih mx-[90px] my-0 rounded-3xl" />
</Link> ):      (         <Link to="/Contact">
  <Buttonn text="Contact Me" className="salih mx-[90px] my-0 rounded-3xl" />
</Link>   )}              </div>
              </div>
            </div>
            <div className="carddd">
              <div className="sbox">
                <FontAwesomeIcon icon={faMobileAlt} className="icon" />
                <h3 className="titre font-medium">Mobile App Development</h3>
                <p>Ayoub excels in mobile app development. For high-quality app solutions, reach out to discuss your project with him. Contact now!</p>
                <div className="buttonn ml-[-8px] relative">
                {user ?(<Link to="/client/contact">
  <Buttonn text="Contact Me" className="salih mx-[90px] my-0 rounded-3xl" />
</Link> ):      (         <Link to="/Contact">
  <Buttonn text="Contact Me" className="salih mx-[90px] my-0 rounded-3xl" />
</Link>   )}                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceProviders;
