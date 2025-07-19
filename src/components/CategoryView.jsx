
import React from 'react'

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';


const CategoryView = ({cat,deleteCategory ,openEditModel
    
}) => {
    const defaultBanner = "https://media.istockphoto.com/id/1477858506/photo/news-online-in-phone-reading-newspaper-from-website-digital-publication-and-magazine-mockup.jpg?s=1024x1024&w=is&k=20&c=AlvYzHJjpG2COQZOj0zU1GaG_gt8CT-MnSQ236tUQvg=";
    const navigate = useNavigate()


 

   

   
  return (
   <>

    <div className="flex cursor-pointer hover:scale-y-105 transition flex-wrap justify-center gap-4">
            <div   className="shadow-lg flex flex-row p-4 border rounded border-gray-600 gap-3 mt-2 w-full md:w-[48%] justify-between">
        <div>
         <img src={defaultBanner} width="200" height="100" alt="Category Banner" />
        </div>
        <div className='flex flex-wrap  flex-col '>
              <h1 className='text-2xl'>Title: {cat.title}</h1>
          <p className='text-2xl'>Description: {cat.desc}</p>
        </div>
          <div className='flex gap-6 flex-col justify-right '>
        <Button onClick={()=>{
          openEditModel(cat);
        }}>Update</Button>
        <Button onClick={()=>{
          deleteCategory(cat);
          
          
        }}  color="red">Delete</Button>
        </div>
      </div>
            </div>
   </>
  )
}

export default CategoryView