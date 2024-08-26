import { Link } from 'react-router-dom';
import './Button.css';

const Buttonn = ({ className, href,text }) => {
  return (
    <div className='btn_box ml-auto'>
      <Link to={href} target='_blank' rel='noreferrer' className={`btn text-sm ${className}`}> {text}
      </Link>

    </div>
  );
};


const Button = () => {
  return (
    <div className='justify-center align-top'>
      <button className='botton text-2xl'>login</button>
    </div>
  );
};

export { Buttonn, Button };

