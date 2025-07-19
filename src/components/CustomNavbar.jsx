import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle,Button, DarkThemeToggle } from "flowbite-react";
import { CiLogin } from "react-icons/ci";
import { Link } from 'react-router-dom';
import '../css/nav.css'
import { useAuth } from '../context/AuthContext';
import { BUSINESS_NAME } from './config/Constant';
const CustomNavbar = () => {
  const [links,newLinks]=useState([
    {name:'Home',link:""},
    {name:'About',link:"/about"},
    {name:'Services',link:"/service"},
    {name:'Courses',link:"/course"},
    {name:'Categories',link:"/categories"},

  ]);


  const [loginLinks,setLoginLinks]=useState([
    {name:'Dashboard',link:"/dashboard/home"},
    {name:'Profile',link:"/dashboard/profile"},
  

  ]);





  const {isLogin,token,login,logOut,user} = useAuth();
  return (
    <>
    <Navbar className='shadow-lg dark:bg-gray-700 dark:text-white text-black fixed top-0  w-full z-50' fluid rounded>
      <NavbarBrand  href="https://flowbite-react.com">
        <img src="/react.svg" className="mr-3 h-6 sm:h-9 rounded" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">{BUSINESS_NAME}</span>
      </NavbarBrand>
       <div className="flex  gap-3 md:order-2">
            
       
         {/* <Button>Login</Button>
         <Button color="cyan">Registation</Button> */}
     {!isLogin() &&(
        <>
        <Link to={'/login'}> <button className='px-5 py-3 bg-blue-600 hover:bg-blue-500 rounded-3xl shadow-lg text-white '>Login</button></Link>
         <Link to={'/signup'}><button className='px-5 py-3 bg-purple-700 hover:bg-purple-900 rounded-3xl shadow-lg text-white '>Registration</button></Link>
       
       
       </>
     )}


     {
      isLogin() && (
        <>
        <Link to={'/dashboard/profile'}>  <button   className='px-5 py-3 bg-red-600 hover:bg-red-500 rounded-3xl shadow-lg text-white '>{user.name}</button></Link>
         <button onClick={
         ()=>{
          logOut();
         }
         } className='px-5 py-3 bg-purple-600 hover:bg-purple-500 rounded-3xl shadow-lg text-white '>Logout</button>

        </>
      )
     }
            <DarkThemeToggle />
        <NavbarToggle />
      </div>

      <NavbarCollapse>

        { 
         !isLogin()?( links.map((link,index)=>(
             <NavbarLink key={index} as={Link} to={link.link}  >
         {link.name}
        </NavbarLink>
          ))):( loginLinks.map((link,index)=>(
             <NavbarLink key={index} as={Link} to={link.link} >
         {link.name}
        </NavbarLink>
          )))
        }
       
        
        
      </NavbarCollapse>
    </Navbar>
    </>
  )
}

export default CustomNavbar