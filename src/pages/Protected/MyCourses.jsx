import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { getOrderByUserIdAndStatus } from '../../services/OrderService';



const MyCourses = () => {

  const {user} =useAuth();
  const [MyCourses,setMyCourses] = useState([]);
  


const loadCourse =async()=>{

  const response = await getOrderByUserIdAndStatus(user.userId);
  console.log(response);
  setMyCourses(response);
  


}

useEffect(()=>{
  loadCourse();
},[]);

console.log(MyCourses.length);



  return (
 <>
  <div className='h-28 w-full dark:bg-gray-600  bg-sky-100'>
  <div className='w-full is-content-box-div mx-auto flex items-center pl-14 is-content-1400 xs-w-1400 md-w-1400 sm-w-1400 h-full'>
    <h1 className='text-3xl  font-medium capitalize'>My Enrollments</h1>
  </div>
  <div className='flex justify-between p-4'>
    <div className='flex items-center'>
      <h4 className='capitalize text-2xl'>
        All
      </h4>
      <div className='bg-sky-200 dark:bg-gray-400 rounded-3xl p-1 text-xs flex items-center justify-center h-6 w-8 ml-2'>
        {MyCourses.length}
      </div>
     

    </div>
     

  </div>
  <div class="flex flex-col gap-6">
      {
        MyCourses.map((cour,index)=>(

          <div key={index} class="w-full border border-zinc-700 rounded-none p-6 hover:border-blue-500 transition cursor-pointer">
      <div class="flex flex-col md:flex-row gap-4 items-start px-6">
        <img src={cour.course.bannerUrl} alt="Enterprise Dashboard Design"
          class="w-full md:w-48 h-40 object-cover rounded-md hover:opacity-90 scale-100 hover:scale-110 transition duration-500 ease-in-out" />
        <div class="text-white w-full">
          <h3 class="text-xl font-semibold">{cour?.course?.title}</h3>
          <div className='pt-1 md:pt-2'>
            <div className=' bg-yellow-400 rounded-sm w-28  '>
               <p className='px-3 py-2 bg-yellow-400 rounded-md text-left dark:text-white text-gray-900'>PURCHASED</p>
            </div>
          </div>
          <p class="text-sm mt-5 text-zinc-300">{cour.course.shortDesc}</p>
          
        </div>
      </div>
    </div>
        ))
      }
  
    

    
   

      </div>
     
   
  </div>


 </>

  )
}

export default MyCourses