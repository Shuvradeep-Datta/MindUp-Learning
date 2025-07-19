import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const CategoryView = ({cat}) => {
  const navigate = useNavigate();
    
  return (
   <div onClick={()=>{
    console.log(cat.id);
    navigate(`/dashboard/home/${cat.id}`)
    
    
   }} className="bg-white hover:bg-sky-600 dark:bg-gray-800 shadow-md rounded-lg p-4 w-52 mt-3 cursor-pointer " >
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{cat.title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{cat.desc}</p>
    </div>

  )
}

export default CategoryView