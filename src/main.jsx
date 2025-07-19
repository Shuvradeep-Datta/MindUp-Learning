import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Services from './pages/Services.jsx'
import Courses from './pages/Courses.jsx'
import Categories from './pages/Categories.jsx'
import ErrorElement from './components/NotFoundPage.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import router from './components/config/routes.jsx'







createRoot(document.getElementById('root')).render(
  
      
    <RouterProvider router={router} />
    
  
 
    
 

);
