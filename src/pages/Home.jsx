import React from 'react'
import CustomNavbar from '../components/CustomNavbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from '../context/AuthContext'
import { Helmet } from 'react-helmet'
// App.jsx
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/');


const Home = () => {
  return (
    <>
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
    </div>
    <ToastContainer />
    <CustomNavbar />
   
    <div className='pt-16 h-screen'>
      <Outlet />
    </div>

    </>
  )
}

export default Home