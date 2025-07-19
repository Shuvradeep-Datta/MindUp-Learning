import { Badge, Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const CourseView = ({items}) => {

  const {isLogin ,user} = useAuth()
  return (
    <>
     <div  class="w-[300px] bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={items.bannerUrl} alt="Banner" class="w-full h-40 object-cover" />
      <div class="p-4 space-y-2">
        <h2 class="text-lg font-semibold text-gray-800 dark:text-white truncate">{items.title}</h2>
        <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{items.shortDesc}</p>
        <div class="flex items-center justify-between">
          <div>
            <span class="text-green-600 font-bold">
              ₹{Math.round(items.price - ((items.price * items.discount) / 100))}
            </span>
            <span class="text-sm line-through text-gray-500 ml-2">₹{items.price}</span>
            <span class="text-sm text-red-500 ml-1">-{Math.round(items.discount)}%</span>
          </div>
          <span class="text-xs px-2 py-1 bg-indigo-600 text-white rounded-full">{items?.live?"Live":<p >Not Live</p>}</span>
        </div>
       
      </div>
      <div className='flex gap-4  justify-center p-4'>
         <Button as={Link} to={`/courses/${items.id}`} >Learn More</Button>
     {
      isLogin() &&(
         <Button as={Link} to={`/order/${items.id}`} color="green">Buy Now</Button>
      )
     }
     </div>
    </div>
    </>
  )
}

export default CourseView