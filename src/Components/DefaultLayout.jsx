import { Fragment} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon,  XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, Outlet,Link,Navigate } from 'react-router-dom'
import {Button} from './button/Button'
import styled from 'styled-components';
import logo from '../assets/logo.png'
import {useStateContext  } from "../Contexts/ContextProvider";
import Footer from './Footer'
import './testemonials/Testemonials.css';


const navigation = [
    { name: 'Home', to:'/'},
    { name: 'About', to:'/about'},
    { name: 'Projects', to:'/project'},
    { name: 'Contact ', to:'/contact' },
  ]
  const userrnavigation = [
    { name: 'Home', to:'/'},
    { name: 'About', to:'/about'},
    { name: 'Projects', to:'/project'},
    { name: 'Contact ', to:'/contact' },
    { name: 'Login ', to:'/login' },


  ]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 1px;
  right: 30px;
`;

const CallButton = styled.button`
  background-color: var(--hover-color);
  color: #fff;
  border: none;
  border-radius: 100%;
  width:30px;
  height: 30px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const FeedbackButton = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
export default function DefaultLayout() {

const {user,isLoading}=useStateContext();
if (!isLoading) {
if (user) {
   return  <Navigate to='/dashboard'></Navigate> ;
}else if(!user) {
  return (

    <>

      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
      <Disclosure as="nav" className=" bg-white shadow-md  md:rounded-b-[40px]  sm:rounded-sm  border-sky-500 ">
          {({ open }) => (
            <>
               <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="flex flex-3 float-right items-center justify-end">
                    <div className="flex flex-shrink-0 md:ml-[-20px] md:mr-[210px]  items-center">
                    <img
                        className="block h-8  w-auto lg:hidden"
                        src={logo}
                        alt="Your Company"
                      />
                      <img
                        className="hidden sm:ml-14 h-12  w-auto  lg:block"
                        src={logo}
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                    <div className="flex ml-[-20px]  justify-between space-x-4  ">
                        {navigation.map((item) => (
                          <NavLink
                            as="a"
                            key={item.name}
                            to={item.to}
                            className={({ isActive })=> classNames(
                              isActive ? ' underline  underline-offset-4 text-black font-bold' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-8 py-2 text-sm font-medium'
                            )}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="butown hidden md:block ">
            {!user && (
                   <div className=' mx-4 mr-6 my-3'>
    <Link to='Login'>
      <Button />
    </Link>
  </div>)
  }



                  </div>
 <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-00 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-100">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
 <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2  sm:px-3">

              {userrnavigation.map((item) => (
                  <NavLink

                  key={item.name}
                  to={item.to}
                  >
          <Disclosure.Button
                       as="a"
            className={({ isActive }) =>
              classNames(
                isActive ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )
            }
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </Disclosure.Button>

          </NavLink>
        ))}



              </div>

            </Disclosure.Panel>
            </>
          )}
        </Disclosure>




        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="sm:p-x-2 ">
        <Outlet/>
        <ButtonWrapper className='hidden sm:block  mr-[-25px] mb-[-14px]'>
      <CallButton className='mb-[-12px]'>  <Link to='/login'>Call </Link> </CallButton>
        <FeedbackButton><Link to='/login'>Feedback</Link></FeedbackButton>

      </ButtonWrapper>
      </div>
      </div>
        </main>
      </div>
      <div className=' relative'>
        <Footer></Footer>
      </div>

    </>
  )}
}
}




