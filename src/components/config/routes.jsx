import React from "react";
import App from "../../App";
import Home from "../../pages/Home";
import NotFoundPage from "../NotFoundPage";
import Services from "../../pages/Services";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Courses from "../../pages/Courses";
import Categories from "../../pages/Categories";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import Profile from "../../pages/Protected/Profile";
import { AuthProvider } from "../../context/AuthContext";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import Dashboard from "../../pages/Protected/Dashboard";
import DashboardHome from "../home/DashboardHome";
import AdminProtectedRoute from "../home/AdminProtectedRoute";
const AddCategory = React.lazy(()=>import ("../../pages/AdminProtected/AddCategory"))
const AddCourses = React.lazy(()=>import("../../pages/AdminProtected/AddCourses"))
import ShowUsers from "../../pages/AdminProtected/ShowUsers";
import AdminDashboard from "../../pages/AdminProtected/AdminDashboard";
import { ROLE_ADMIN } from "./Constant";
import HomePages from "../../pages/AdminProtected/HomePages";
import AllCourse from "../../pages/AdminProtected/AllCourse";
import AllCategories from "../../pages/AdminProtected/AllCategories";
import MyCourses from "../../pages/Protected/MyCourses";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Hooks from "../../pages/Hooks";
import Performance from "../../pages/Performance";
import SingleCourseViewPage from "../../pages/SingleCourseViewPage";
import OrderPage from "../GUEST/OrderPage";
import CourseByCategory from "../GUEST/CourseByCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Provider store={store}><AuthProvider ><Home /></AuthProvider></Provider>,
    errorElement: <NotFoundPage />,
    children:[
  {
    path:"",
    element: <App/>
  },
    
  {
    path: "/service",
    element: <Services/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/course",
    element: <Courses/>
  },
  {
    path:"/courses/:courseId",
    element:<SingleCourseViewPage />
  },
  {
    path:"/order/:courseId",
    element:<ProtectedRoute elements={OrderPage}/>
  },
  {
    path: "/categories",
    element: <Categories/>
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/signup',
    element:<SignUp />
  },
  {
    path:"/dashboard",
    element:<ProtectedRoute elements={Dashboard}/>,
    children:[
       {
    path:"home",
    element:<ProtectedRoute elements={DashboardHome}/>
  },
   {
    path:"home/:categoryId",
    element:<ProtectedRoute elements={CourseByCategory}/>
  },
      
  {
    path:"my-courses",
    element:<ProtectedRoute elements={MyCourses}/>
  },
  {
    path:"profile",
    element:<ProtectedRoute elements={Profile}/>
  },

    ]
  },
  {
    path:"/admin",
    element: <AdminProtectedRoute elements={AdminDashboard} />,
    children:[
      {
          path:"home-page",
          element:<HomePages />
      },
      {
          path:"all-courses",
          element:<AllCourse />
      },
      {
          path:"all-categories",
          element:<AllCategories />
      },
      {
     path:"addCourses",
    element:<React.Suspense fallback={<h1>Loading...</h1>}><AddCourses /></React.Suspense>
  },
  {
    path:"addCatergory",
    element: <React.Suspense fallback={<h1>Loading...</h1>}> <AddCategory /></React.Suspense>
  },
  
  {
    path: "showCourses",
    element:<ShowUsers />
  }
    ]
  }
 
    ]
  },
  {
    path:"/hooks",
    element:<Hooks />
  },
  {
    path:"/performance-hooks",
    element:<Performance />
  },
 
  

]);
export default router