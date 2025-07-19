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
HiCog  
} from "react-icons/hi";
import { Link, Outlet, useLocation } from 'react-router-dom';

import { MdAdminPanelSettings } from "react-icons/md";
import { ROLE_ADMIN } from '../../components/config/Constant';
import { ConvertRolesToArray } from '../../Helper/RoleHelper';

const Dashboard = () => {
   const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
    const {user,logOut}= useAuth();

    
    
    const location = useLocation();
    

    
  return (
    <>
    <div className="  m-5">
        
        <Outlet />
      </div>
      <Drawer className='mt-14' backdrop={false} open={isOpen} onClose={handleClose}>
        <DrawerHeader  title="Dashboard Menu" titleIcon={() => <></>} />
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
                    <SidebarItem active = {location.pathname == "/dashboard/home"} as={Link} to="/dashboard/home" icon={HiChartPie}>
                      Dashboard
                    </SidebarItem>
                    <SidebarItem active = {location.pathname == "/dashboard/profile"} as={Link} to="/dashboard/profile" icon={HiCog }>
                     Profile
                    </SidebarItem>
                    <SidebarItem active = {location.pathname == "/dashboard/my-courses"} as={Link} to={"/dashboard/my-courses"} icon={HiAcademicCap}>
                     My Courses
                    </SidebarItem>
                    <SidebarItem  icon={HiOutlineDatabase}>
                     Store
                    </SidebarItem>
                    <SidebarItem  icon={HiOutlineShoppingCart }>
                     Cart
                    </SidebarItem>
                    <SidebarItem  icon={HiOutlineVideoCamera}>
                     Video
                    </SidebarItem>
                  </SidebarItemGroup>
                  <SidebarItemGroup>
                    <SidebarItem href="https://github.com/themesberg/flowbite-react/" icon={HiClipboard}>
                      Favourite
                    </SidebarItem>
                    <SidebarItem href="https://flowbite-react.com/" icon={HiCollection}>
                      Feedback
                    </SidebarItem>
                    <SidebarItem onClick={()=>{logOut() }}  icon={HiInformationCircle}>
                     
                      Logout
                    </SidebarItem>
                    {
                     ConvertRolesToArray(user.roles).includes(ROLE_ADMIN) &&(
                        <SidebarItem as={Link} to={"/admin"} icon={MdAdminPanelSettings}>
                     
                      Admin Dashboard
                    </SidebarItem>
                      )
                    }
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

export default Dashboard