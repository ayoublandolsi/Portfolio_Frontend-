import { Fragment} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon,  XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, Outlet,Link,useNavigate,useNavigation } from 'react-router-dom'
import {Button} from './button/Button'
import styled from 'styled-components';
import logo from '../assets/logo.png'
import {useStateContext  } from "../Contexts/ContextProvider";
import Footer from './Footer'

const navigation = [
    { name: 'Home', to:'/client/'},
    { name: 'Dashboard ', to:'/dashboard' },
    { name: 'About', to:'/client/about'},
    { name: 'Projects', to:'/client/project'},
    { name: 'Contact ', to:'/client/contact' },
  ]

const userNavigation = [
  { name: 'Your profile', to: '/dashboard'  },
  { name: 'Settings', to: '#' },

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
  background-color: #FF512F;
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
export default function GuestLayout() {
    const navigate = useNavigate();
    const { user, logout} = useStateContext();

    if (!user) {
      return navigate("/login");
    }
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
                    <div className="flex flex-shrink-0 md:ml-[-20px] md:mr-[130px]   items-center">
                    <img
                        className="block h-8  w-auto sm:hidden md:hidden lg:hidden"
                        src={logo}
                        alt="Your Company"
                      />
                      <img
                        className="hidden sm:ml-14 h-12  w-auto sm:hidden md:hidden   lg:block"
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
                              isActive ? ' bg-sky-700 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-8 py-2 text-sm font-medium'
                            )}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block">

                <div className=" absolute inset-y-0 right-0 flex items-center pr-2 lg:static md:inset-auto lg:ml-6 lg:pr-0">
                       <button
                        type="button"
                        className="rounded-full mr-[-146px]  text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                      {/*  Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                     {/* <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />

                   */}
                   <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white ">
                          <span className="sr-only">Open user menu</span>
                            <img className="h-12 w-12 rounded-full" src={`http://127.0.0.1:8000/storage/users-avatar/${user?.avatar}`} alt="" />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.to}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>


                            ))}
                             <Menu.Item >
                                <Link onClick={logout} to={'/login'}  className='hover:bg-gray-100 block px-4 py-2 text-sm hover:text-gray-700 cursor-pointer'  >Sign out</Link>
                            </Menu.Item>

                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
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
                {navigation.map((item) => (
                    <NavLink
                    key={item.name}
                    to={item.to}
                    >
            <Disclosure.Button
            as='a'
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
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={`http://127.0.0.1:8000/storage/users-avatar/${user?.avatar}`} alt="user" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user?.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user?.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto  flex-shrink-0 rounded-full bg-gray-700 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">

                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        to={item.to}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-800 hover:text-white cursor-pointer"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                     <Disclosure.Button  onClick={logout}
    className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-800 hover:text-white cursor-pointer">
                               Sign out
                                </Disclosure.Button>
                  </div>
                </div>
              </Disclosure.Panel>

            </>
          )}
        </Disclosure>




        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="sm:p-x-2 ">

        <Outlet/>
      </div>
      </div>
        </main>
      </div>
      <ButtonWrapper className='hidden sm:block  mr-[-25px] mb-[-14px]'>
      <CallButton className='mb-[-12px]' >  <a href='http://localhost:8000/chatify'>Call </a> </CallButton>
        <FeedbackButton><Link to='/dashboard/Feedback'>Feedback</Link></FeedbackButton>

      </ButtonWrapper>
      <div className=' relative'>
      <Footer/>
      </div>

    </>
  )
}




