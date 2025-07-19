import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { createCategory } from '../../services/CategoryService';
import { toast } from 'react-toastify';
import { HttpStatusCode } from 'axios';
import { Helmet } from 'react-helmet';
const AddCategory = () => {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({mode:"onChange"})
   const navigation = useNavigate({mode:"onChange"});

   const onSubmit = async (data) => {
     try{
        const response = await createCategory(data);
        console.log(response);
      
        toast.success("Category Created Successfully");
        navigation("/admin/all-categories");
   
     }catch(error){
      toast("Something went Wrong....")
     }
   };
  return (
   <>
   <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
     <Helmet>
        <title>Add Categories</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        ➕ Add New Category
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Title
          </label>
          <input
          {...register("title", {
             required: "Title is required",
              })}
            type="text"
            id='title'
            name="title"
            placeholder="Enter category title"
            className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
           {errors.title && <span className='text-base px-2 py-2 text-red-500'>{errors.title.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Description
          </label>
          <textarea 
          {...register("desc", {
             required: "Description is required",
              })}
            name="desc"
            id='desc'
            rows={3}
            placeholder="Write a brief description"
            className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          ></textarea>
        </div>

        <div className="flex justify-start gap-4">
          <button
            type="submit"
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-md transition"
          >
            Save
          </button>
          <button
            type="reset"
            className="px-5 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-md transition"
          >
            Reset
          </button>
        </div>
      </form>
    </div>

   </>
  )
}

export default AddCategory