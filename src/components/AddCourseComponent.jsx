import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { HiMail, HiOutlinePhotograph } from "react-icons/hi";
import { FileInput, Label } from "flowbite-react";
import { FaBook } from "react-icons/fa";
import { uploadCoursebanner,addCourse } from "../services/CourseService";
import { toast } from "react-toastify";


const AddCourseComp = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
    reset,
  } = useForm();

  const [longDesc, setLongDesc] = useState("");
  
  

 

  const onSubmit = async (data) => {
    
  console.log(data);
  
    try {
      const course = await addCourse(data);
      toast("Course Added Successfully...");
      
        } catch (error) {
      toast.error("Error in adding data");
      console.log(error);
    }
  };





  return (
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-semibold text-gray-800 text-center dark:text-white mb-6">
         Add New Course
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Title */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Title
          </label>
          <input
            {...register("title", {
             required: "Title is required",
              })}
            type="text"
            name='title'
            id='title'
            placeholder="Enter product title"
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.title && <span className='text-base px-2 py-2 text-red-500'>{errors.title.message}</span>}
        </div>

        {/* Short Description */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Short Description
          </label>
          <input
          {...register("shortDesc", {
             required: "Short Description is required",
              })}
            type="text"
            name = "shortDesc"
            id = "shortDesc"
            placeholder="Quick summary"
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.shortDesc && <span className='text-base px-2 py-2 text-red-500'>{errors.shortDesc.message}</span>}
        </div>

         {/* Long Description */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Long Description
          </label>
          <textarea
          {...register("long_description", {
             required: "Long Description is required",
              })}
          name='long_description'
          id='long_description'
            rows="4"
            placeholder="Full details"
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.long_description && <span className='text-base px-2 py-2 text-red-500'>{errors.long_description.message}</span>}
        </div>

        {/* Price & Discount */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Price (₹)
            </label>
            <input
            {...register("price", {
             required: "Price is required",
              })}
            name='price'
            id='price'
              type="number"
              placeholder="e.g. 499"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.price && <span className='text-base px-2 py-2 text-red-500'>{errors.price.message}</span>}
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Discount (%)
            </label>
            <input
            {...register("discount", {
             required: "Discount is required",
              })}
              type="number"
                name='discount'
            id='discount'
              placeholder="e.g. 10"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        {/* Live Check Box */}
        <div className="flex items-center mb-4">
    <input
  {...register("live")}
  type="checkbox"
  id="live"
  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
/>
    <label htmlFor="live" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Live</label>
    {errors.live && <span className='text-base px-2 py-2 text-red-500'>{errors.live.message}</span>}
</div>
        {/* Banner Image */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Banner Image
          </label>
          <label className="flex items-center justify-center px-4 py-3 bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md cursor-pointer hover:border-indigo-400 transition">
            <HiOutlinePhotograph className="text-2xl text-gray-400 dark:text-gray-500 mr-2" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Choose an image</span>
            <input  id='banner' name='banner' type="file" accept="image/*" className="hidden" />
            
          </label>
         
          <p ><strong className="font-medium text-gray-400 dark:text-gray-500">Banner is Shown in Course View Page</strong></p>
             
        </div>

        {/* Category List Dropdown
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Category
          </label>
          <select
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select category</option>
            <option value="tech">Tech</option>
            <option value="fashion">Fashion</option>
            <option value="books">Books</option>
            <option value="home">Home & Decor</option>
          </select>
        </div> */}

       
<div className='flex justify-center'>
  
        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-md"
          >
            Save
          </button>
          <button
            type="reset"
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-md"
          >
            Clear
          </button>
        </div>
</div>
      </form>
    </div>
  );
};

export default AddCourseComp;