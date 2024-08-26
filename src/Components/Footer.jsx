import { FiHeart, FiLinkedin, FiGithub,FiChevronUp,  FiFacebook, FiInstagram, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="   px-8 mb-4 mt-1  flex flex-col   items-center">
  <hr className="w-full  border-gray-500 mt-4 mb-2" />
<footer className="px-0  sm:pl-8 sm:pr-20 mb-1 mt-1 flex items-center justify-between bottom-0 left-0 right-0 w-full">

      <div className="flex items-center space-x-2">
        <span className="text-gray-700 text-lg">© 2023 Landolsi. All rights reserved.</span>
        <FiHeart className="text-red-500" />
      </div>
      <div className="flex items-center space-x-4">

      <a href="https://github.com/ayoublandolsi" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-300  ">
          <FiGithub fontSize={23} />
        </a>


        <a href="https://www.instagram.com/ayoublnls/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-500">
          <FiInstagram fontSize={23} />
        </a>
        <a href="https://www.linkedin.com/in/ayoub-landolsi-665a5b234" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-sky-700  ">
          <FiLinkedin fontSize={23} />
        </a>
        <a href="mailto:ayoublandolsi@gmail.com" className="text-gray-700 hover:text-yellow-500">
          <FiMail fontSize={23} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100093560836" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-sky-500">
          <FiFacebook fontSize={23} />
        </a>
          <a

            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className=" text-sky-900 cursor-pointer  rounded-md hidden sm:flex"
          >
            <FiChevronUp size={40}  />
          </a>
          </div>
    </footer>
        </footer>

  );
}
