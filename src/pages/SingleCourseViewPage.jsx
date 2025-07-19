import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCourseById } from '../services/CourseService';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const SingleCourseViewPage = () => {
    const {courseId} = useParams();
    const [singleCourseData,setSingleCourseData] = useState(null);
    const[loading,setLoading] = useState(true);

 async function loadData(){
    try{    setLoading(true)
            const response = await getCourseById(courseId)
            console.log("response is ",response);
            setSingleCourseData(response);
            setLoading(false);
            
    }catch(error){
        toast.error("Error Occured...");
    }
}
    
useEffect(()=>{
    loadData();
},[]);

  console.log(singleCourseData);
   
    
  return (
    <>
    <Helmet>
        <title>{`${singleCourseData?.title}  pages`}</title>
    </Helmet>
  <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md mt-4">
       <img src={singleCourseData?.bannerUrl} alt="Banner" class="w-full h-80 object-cover" />
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-3xl font-bold">{singleCourseData?.title}</h1>
        <span className={`px-3 py-1 rounded-full text-sm ${singleCourseData?.live ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-600'}`}>
          {singleCourseData?.live ? 'Live' : 'Not Live'}
        </span>
      </div>
      <p className="text-gray-500 italic">{singleCourseData?.shortDesc}</p>
      <div className="mt-4 space-y-3 text-gray-700">
        {singleCourseData?.long_description.split('\n').map((para, i) => <p key={i}>{para}</p>)}
      </div>
      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <span className="text-lg font-semibold text-indigo-600">₹{singleCourseData?.price}</span>
       {singleCourseData?.live ? (
  <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
    Enroll Now
  </button>
) : (
  <button className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed" disabled>
    Enroll Now
  </button>
)}

      </div>
    </div>

    </>
  )
}

export default SingleCourseViewPage