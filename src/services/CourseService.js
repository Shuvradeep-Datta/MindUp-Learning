import { privateAxios,publicAxios } from "../components/config/AxiosConfig";

//Create Categories  
export const addCourse =async (courses)=>{
  const result =   await privateAxios.post('/courses',courses);
  return result.data;
   
}
//Upload Course Banner
export const uploadCoursebanner = async (courseId, banner) => {
  let formData = new FormData();
  formData.append("banner", banner);
  const response = await privateAxios.post(
    `/courses/${courseId}/banners`,
    formData
  );
  return response.data;
};

//Get All Courses
export const getAllCourses = async ( 
  page = 0,
  size = 50,
  sort = "createdDate,desc") => {
  const response = await publicAxios.get(`/courses?page=${page}&size=${size}&sort=${sort}`);
  return response.data; 
}




//Delete Course
export const deleteCourse = async (courseId) => {
  const response = await privateAxios.delete(`/courses/${courseId}`);
  return response.data;
}

//Get CourseById
export const getCourseById = async (courseId)=>{
  const response =await publicAxios.get(`/courses/${courseId}`);
  return response.data;
}


