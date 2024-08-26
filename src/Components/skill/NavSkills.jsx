import { NavLink, Outlet } from 'react-router-dom'
import './skills.css'
import Card from '../cardabout/Card';
import Skills from './Skills';
import { useState } from 'react';
import { useStateContext } from '../../Contexts/ContextProvider';

export default function NavSkills() {
    const {user}=useStateContext();
  const navigation = [
    { name: 'Skills', to:'/skills'},
    { name: 'Education', to:'/Education' },
    { name: 'Experience', to:'/Exprience'},
  ]
  const authnavigation = [
    { name: 'Skills', to:'/about/client/skills'},
    { name: 'Experience', to:'/about/client/Exprience'},
    { name: 'Education', to:'/about/client/education' },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const [navstate,setnavstate] =useState(false);
  return (
    <>
    <Card/>
    <nav className=" rounded-full p-4 mt-0 ">
        <hr className=' font-bold bg-black border-black'/>
      {user ?(  <ul className="flex ">

{authnavigation.map((item) => (

                    <NavLink


                      key={item.name}
                      to={item.to}
                      className={({ isActive })=> classNames(
                        isActive ? ' rounded samira  font-bold' : '',
                        ''
                      )}
                      onClick={() => {
                          window.scrollTo({ top:750, behavior: 'smooth' });
                          return(setnavstate(true));
                        }}
                    >
                  <li className='px-8 py-2   rounded-full cursor-pointer'>

                      {item.name}
                      </li>
                    </NavLink>

                  ))}


</ul>):(  <ul className="flex ">

{navigation.map((item) => (

                    <NavLink


                      key={item.name}
                      to={item.to}
                      className={({ isActive })=> classNames(
                        isActive ? ' rounded samira  font-bold' : '',
                        ''
                      )}
                      onClick={() => {
                          window.scrollTo({ bottom:350, behavior: 'smooth' });
                          return(setnavstate(true));
                        }}
                    >
                  <li className=' px-3 sm:px-8 py-2  text-[13px]  sm:text-[16px]  rounded-full cursor-pointer'>

                      {item.name}
                      </li>
                    </NavLink>

                  ))}


</ul>)}

    </nav>
    <div>
        {
!navstate ?(
    <Skills/>) :<Outlet/>
   }


    </div>
    </>
  );
}



