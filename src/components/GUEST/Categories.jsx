import React, { use, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { getAllCategories } from '../../services/CategoryService';
import CategoryView from '../../pages/CategoryView';

const Categories = () => {

const [categoryData, setCategoryData] = useState(null);


async function loadAllCategories() {
 try {
   const result = await getAllCategories();
   toast.success("Categories Loaded Successfully...");
   console.log(result);
   
   setCategoryData(result);
   
 } catch (error) {
   toast.error("Failed to load categories"); 
   console.log(error);
     
}
}
useEffect(()=>{
    loadAllCategories();
},[])


  return (
   <div className=' bg-gray-100 dark:bg-gray-900 p-6 '>
        <h1 className='text-xl font-bold'>Category</h1>
        <div className='flex flex-wrap gap-3'>
            {
                categoryData?.content?.map((cat,index)=>(
                    <CategoryView key={index} cat = {cat}/>
                ))
            }
        </div>
   </div>
  )
}

export default Categories