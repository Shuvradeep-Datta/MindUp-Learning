import React from 'react'
import { Label, TextInput } from "flowbite-react";
import { HiMail, HiOutlinePhotograph } from "react-icons/hi";
import { useForm } from "react-hook-form"
import AddCourseComp from '../../components/AddCourseComponent';

const AddCourses = () => {

   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data)

  return (
  <div>
    <AddCourseComp />
  </div>

  )
}

export default AddCourses