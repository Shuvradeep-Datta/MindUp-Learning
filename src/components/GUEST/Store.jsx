import React, { useEffect, useState } from 'react'
import { getAllCourses } from '../../services/CourseService';
import { toast } from 'react-toastify';
import CourseView from '../../pages/CourseView';
import { Spinner } from 'flowbite-react';

const Store = () => {

    const [courseData,setCourseData] = useState(null);
     const [loading,setLoading] =useState(true);

   async function loadAllData(){
        try{
          setLoading(true)
            const result = await getAllCourses();
            toast.success("Data Loaded Successfully...");
            setCourseData(result)
           console.log(result);
           setLoading(false)
           
            
        }catch(error){
            toast.error(error);
        }

    }

  useEffect(()=>{
    loadAllData();
  },[]);
    
    console.log(courseData);
   

  return (
    <>
   <div class="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
  <h1 class="text-3xl text-gray-800 dark:text-white mb-6">All Programming Courses</h1>

  {
    loading ?(
        <div className='flex flex-col items-center p-1'>
      <Spinner size='xl' />
      <p className='text-lg'>Loading...</p>
    </div>
    ):(<div class="flex flex-wrap gap-6 justify-center">
  {courseData?.content?.map((items, index) => (
   <CourseView key={index} items={items} />
  ))}
</div>)
  }
  

</div>
    </>
  )
}

export default Store