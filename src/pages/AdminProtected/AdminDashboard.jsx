import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { Card } from "flowbite-react";
import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  TextInput,
} from "flowbite-react";

import { useState } from "react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiAcademicCap,
  HiSearch,
  HiShoppingBag,
  HiOutlineDatabase,
  HiOutlineVideoCamera ,
  HiOutlineShoppingCart
,
HiCog  ,HiTruck 
} from "react-icons/hi";
import { Link, Outlet, useLocation } from 'react-router-dom';
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";


const AdminDashboard = () => {
   const [isOpen, setIsOpen] = useState(true);
  
    const handleClose = () => setIsOpen(false);
      const {user,logOut}= useAuth();

      const location = useLocation();
  return (
   <>
   <div className=" pl-70 m-5 ">
           
           <Outlet />
         </div>
         <Drawer className='mt-16 dark:border ' backdrop={false} open={isOpen} onClose={handleClose}>
           <DrawerHeader  title="ADMIN MENU" titleIcon={() => <></>} />
           <DrawerItems  >
             <Sidebar
               aria-label="Sidebar with multi-level dropdown example"
               className="[&>div]:bg-transparent [&>div]:p-0 shadow-sm "
             >
               <div className="flex h-full flex-col justify-between py-2">
                 <div>
                   <form className="pb-3 md:hidden">
                     <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
                   </form>
                   <SidebarItems>
                     <SidebarItemGroup>
                       <SidebarItem as={Link} active = {location.pathname === "/admin/home-page"} to="/admin/home-page" icon={HiChartPie}>
                         Dashboard
                       </SidebarItem>
                       <SidebarItem as={Link} active = {location.pathname === "/dashboard/profile"} to="/dashboard/profile" icon={HiCog }>
                        Profile
                       </SidebarItem>
                       <SidebarItem as={Link}  active = {location.pathname === "/admin/all-courses"}to={"/admin/all-courses"} icon={HiAcademicCap}>
                        All Courses
                       </SidebarItem>
                       <SidebarItem as={Link} active = {location.pathname === "/admin/all-categories"} to={"/admin/all-categories"} icon={HiTruck}>
                       All Categories
                       </SidebarItem>
                      
                       <SidebarItem as={Link} active = {location.pathname === "/admin/addCourses"} to={"/admin/addCourses"}  icon={IoIosAddCircle }>
                       Add Course
                       </SidebarItem>
                       <SidebarItem as={Link} active = {location.pathname === "/admin/addCatergory"} to={"/admin/addCatergory"}  icon={BiSolidCategoryAlt }>
                       Add Category
                       </SidebarItem>
                     </SidebarItemGroup>
                     <SidebarItemGroup>
                       <SidebarItem href="https://github.com/themesberg/flowbite-react/" icon={HiClipboard}>
                        Upload Videos
                       </SidebarItem>
                       <SidebarItem href="https://flowbite-react.com/" icon={HiCollection}>
                        Orders
                       </SidebarItem>
                       <SidebarItem href="https://flowbite-react.com/" icon={FaUsersBetweenLines }>
                        Users
                       </SidebarItem>
                       <SidebarItem className='cursor-pointer' onClick={()=>{logOut() }}  icon={IoLogOutOutline}>
                        
                         Logout
                       </SidebarItem>
                     </SidebarItemGroup>
                   </SidebarItems>
                 </div>
               </div>
             </Sidebar>
           </DrawerItems>
         </Drawer>
   </>
  )
}

export default AdminDashboard