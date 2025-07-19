import React from 'react'
import { TimeAgo } from '../../Helper/TimeAgo'
import { Button } from 'flowbite-react'
import { useAuth } from '../../context/AuthContext'

const UserProfile = (
    {
        user1
    }
) => {


    
    const {user,isLogin} = useAuth();
    
  return (
  <div className="max-w-md mx-auto mt-6 bg-gray-300 dark:bg-gray-700 dark:text-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <div className="p-6">
        
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          {user1.name}
        </h2>
         <p className="text-sm text-gray-500 dark:text-gray-100 mb-1">
          <span className="font-medium">Role:</span> {user1?.roles?.map((e)=>(e.roleName)).join(',')
         }
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-100 mb-1">
          <span className="font-medium">User ID:</span> {user1.userId}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-100 mb-1">
          <span className="font-medium">Email:</span> {user1.email}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-100 mb-1">
          <span className="font-medium">Phone:</span> {user1.phoneNumber}
        </p>
         <p className="text-sm text-gray-500 dark:text-gray-100 mb-1">
          <span className="font-medium">Created : </span> {TimeAgo(new Date(user1.createAt)?.toLocaleDateString())}
        </p>
        <div className="mt-4">
          <span 
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              user1.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {user1.active ? 'Active' : 'Inactive'}
          </span>
        </div>
       {
        isLogin && user.id ==user1.id?(
           <div className='flex justify-center'>
          <p className="text-sm text-gray-500 dark:text-gray-100 mb-1 ">
          <Button className=" text-black  mt-3  dark:text-white text-center focus:outline-none focus:ring focus:ring-blue-500"> UpdateProfile</Button>
        </p>
        </div>
        ):(
          ""
        )
       }

      </div>
    </div>

  )
}

export default UserProfile