import { privateAxios, publicAxios } from "../components/config/AxiosConfig";


//Create Categories  
export const createCategory =async (category)=>{
  const result =   await privateAxios.post('/categories',category);
  return result.data;
   
}

//Get All Categories
export const getAllCategories = async (pageSize = 50,pageNumber = 0)=>{
  const result = await publicAxios.get(`/categories?pageNumber=${pageNumber}&pageSize=${pageSize}&&sortBy=addedDate`);
  return result.data;
  
}

//Delete Categories by categoryId
export const deleteCategoryById = async (categoryId)=>{
  const result = await privateAxios.delete(`/categories/${categoryId}`);
  return result.data;
};

//Update Categories by categoryId
export const updateCategoryById  = async(categoryId, category)  =>{
   const result = await privateAxios.put(`/categories/${categoryId}`, category);
   return result.data;
}

//GetCategoryById
export const geteCategoryById  = async(categoryId)  =>{
   const result = await privateAxios.get(`/categories/${categoryId}`);
  return result.data;
}