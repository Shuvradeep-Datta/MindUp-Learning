import React, { useEffect, useState } from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow,Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { deleteCourse, getAllCourses } from '../../services/CourseService';
import { toast } from 'react-toastify';
import { TimeAgo } from '../../Helper/TimeAgo';
import { Pagination } from "flowbite-react";
import CustomConfirmModal from '../../components/CustomConfirmModal';


const AllCourse = () => {

  const [courseData, setCourseData] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    const [courseToDelete,setCourseToDelete] =useState(null);
    const [openCourseModal,setOpenCourseModal] = useState(false)
    const [courseToDisplay,setCourseToDisplay] = useState(null);



   const onPageChange = (page) => setCurrentPage(page);

   console.log("course data",courseData);
   
  
  useEffect(() => {
    const fetchCourses = async () => { 
      try {
        const courses = await getAllCourses();
        console.log(courses);
        setCourseData(courses);
        toast.success("Courses fetched successfully");
      } catch (error) {
        toast.error("Error fetching courses");
        console.error(error);
      }
    }

    fetchCourses();
  }, []);


  async function callApiToDelete(){
  try{
    const result = await deleteCourse(courseToDelete.id);
    console.log(result);

    const newContent = courseData.content.filter(item => item.id !== courseToDelete.id);
    // console.log("courseto ",courseToDelete.id);
    console.log(newContent);

    setCourseData({
      ...courseData,
      content: newContent
    });
    toast("Course Deleted Successfully...");
    setCourseToDelete(null)
    
    
  }catch(error){
    toast("Something went Wrong...");

  }finally{
    setOpenModal(false)
  }
}


  return (
   <div className='p-5'>
    {
      courseData.numberOfElements>0 && (
         <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Title</TableHeadCell>
            <TableHeadCell>Category</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>Live</TableHeadCell>
            <TableHeadCell>Discount</TableHeadCell>
            <TableHeadCell>Date</TableHeadCell>
           
            <TableHeadCell>
              Action
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
         {courseData.content.map((course,index)=>(
           <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             {course.title}
            </TableCell>
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             {course.categoryList.length<=0 ? "No Category": course.categoryList[0].name}
            </TableCell>
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             {course.price}
            </TableCell>
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             {course.live ? "Yes" : "No"}
            </TableCell>
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {course.discount ? course.discount : "No Discount"}
            </TableCell>
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {TimeAgo(course.createdDate)}
            </TableCell>
             <TableCell className="whitespace-nowrap flex gap-3 font-medium text-gray-900 dark:text-white">
            <Button >Edit</Button>
            <Button
            onClick={()=>{
              setCourseToDisplay(course)
              setOpenCourseModal(true)
            }}
             color="light">ViewCourse</Button>
            <Button onClick={()=>{
                setOpenModal(true);
                setCourseToDelete(course)
                
                
            }} color="red">Delete Course</Button>
            </TableCell>
        
           
          </TableRow>
         ))}
          
         
        </TableBody>
      </Table>
       
      <div className="flex overflow-x-auto sm:justify-center">
      <Pagination layout currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
    </div>
    
    </div>
    
      )
      
    }
    <CustomConfirmModal  isOpen={openModal} heading={"Are you Sure to delete Course!!"}
     closeModal={()=>{
      setOpenModal(false)
      setCourseToDelete(null)
    }} confirmButtonClicked={()=>{
      callApiToDelete();
      
    }}>
      <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            {/* <div className="flex justify-center gap-4">
              <Button color="red" onClick={() => setOpenModal(false)}>
                Yes, I'm sure
              </Button>
              <Button color="alternative" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div> */}
            
          </div>
         
      </CustomConfirmModal>
      {/* <Button onClick={()=>{
        console.log(openModal);
        
        setOpenModal(true)
      }}>Toggle Modal</Button>  */}

      {/* Show Details */}
      <CustomConfirmModal
       isOpen={openCourseModal} 
       heading={`Course Information : ${courseToDisplay?.title}`} 
       showConfirmButton = {false}
       declineButtonText='Close'
       closeModal={()=>{
      setOpenCourseModal(false);
      setCourseToDisplay(null)
      
    }}
     >
      <div className='flex  flex-col gap-4 justify-center items-center'>
        <img src={courseToDisplay?.bannerUrl} className='w-full h-64 object-cover' />
        <div className='border flex  flex-col gap-3 p-5'>
          <h1 className='font-bold text-3xl'>{courseToDisplay?.title}</h1>
          <p>{courseToDisplay?.shortDesc}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus praesentium cumque laboriosam. Tenetur aspernatur fugiat, id autem placeat, soluta culpa mollitia laborum dignissimos ea illum a excepturi eos veniam amet debitis atque, maxime et blanditiis totam ducimus. Fugit facere saepe consequuntur tempora quaerat ad animi atque officia unde. Unde voluptatum consectetur et eum facere magni at aspernatur perferendis nulla quia fugiat, alias incidunt ipsum similique? Eligendi sint at, ab quod voluptas asperiores aspernatur modi odit, possimus voluptatem minima repellendus quo quidem cupiditate aperiam repudiandae quibusdam ullam! Minima, laboriosam. Iste, dignissimos quidem libero voluptatum eveniet nemo aliquid numquam omnis eum.</p>
          <p >{courseToDisplay?.long_description}</p>
          <p>{courseToDisplay?.live ?"Course is live": "Course not live"}</p>
        </div>
      </div>
      </CustomConfirmModal>
      
   </div>
  )
}

export default AllCourse