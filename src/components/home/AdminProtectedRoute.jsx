import React from 'react'
import { ROLE_ADMIN, ROLE_GUEST } from '../config/Constant'
import { useAuth } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom';

const AdminProtectedRoute = ({elements:Component,role=ROLE_ADMIN}) => {

    const {isLogin,user} =useAuth();


    const userRoles = user?.roles.map((role)=> role.roleName)
  return isLogin() && userRoles.includes(role) ? (
    <Component />
  ):(
    <Navigate to="/dashboard"/>  )
}

export default AdminProtectedRoute