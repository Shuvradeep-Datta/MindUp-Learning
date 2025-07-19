import React from 'react'
import UserProfile from '../../components/home/UserProfile'
import { useAuth } from '../../context/AuthContext'

const Profile = () => {

    const {user} = useAuth();
  return (
    <div><UserProfile user1 = {user}/></div>
  )
}

export default Profile