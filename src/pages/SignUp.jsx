import React from 'react'
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createUser } from '../services/AuthService';
import toast from 'react-hot-toast';
function SignUp() {

const navigate = useNavigate();
const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({mode:"onChange"})
  const onSubmit = async(data) => {
    console.log(data);

    try{

      const userDate = await createUser(data);
      console.log(userDate);
      toast.success('User is created')
      navigate("/login")
      
    }catch(errors){
      console.log(errors);
      toast.error('User not created || Something Went Wrong')
      
    }finally{

    }


  }


  return (
    <>
    <div className='flex justify-center mt-4 ml-10 mr-10 '>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full dark:bg md:w-2/4 flex-col gap-2 p-8 rounded-xl shadow-2xl bg-white border border-gray-200 dark:bg-gray-700">
      <h1 className='text-center text-3xl'>Register Here</h1>
       <div>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="name">Your Name</Label>
        </div>
        <TextInput
         {...register("name", { 
          required: "Name is required" ,
          minLength:{
            value: 5,
            message: "Name must be at least 5 Character Long"
          }
          })} className='' name ='name' id="name" type="text" placeholder="Enter Your Name"  shadow />
        {errors.name && <span className='px-2 py-2 text-red-500'>{errors.name.message}</span>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email">Your email</Label>
        </div>
        <TextInput
         {...register("email", {
           required: 'Email is required',
           pattern:{
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Email must be validated"
           }})} className='' id="email" name='email' type="email" placeholder="Enter Your Email"  shadow />
      {errors.email && <span className='px-2 py-2 text-red-500'>{errors.email.message}</span>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phoneNumber">Your Phone</Label>
        </div>
        <TextInput
         {...register("phoneNumber", { 
          required: "Phone is required",
          minLength:{
            value:10,
            message:'Phone Number must be 10 Number'
          } })} name = 'phoneNumber' className='' id="phoneNumber" type="text" placeholder="Enter your Phone Number"  shadow />
      {errors.phoneNumber && <span className='px-2 py-2 text-red-500'>{errors.phoneNumber.message}</span>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password">Your password</Label>
        </div>
        <TextInput {...register("password", { required: "Password is required",
          minLength:{value:5
          ,message:"Password must be 8 Character"}
          ,pattern: {
  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/,
  message: 'Password must be at least 8 characters and include uppercase and lowercase letters, a number, and a special character.'
}
})} id="password" name='password' type="password"  shadow />
      {errors.password && <span className='px-2 py-2 text-red-500'>{errors.password.message}</span>}
      </div>
       <div>
        <div className="mb-2 block">
          <Label htmlFor="about">About</Label>
        </div>
        {/* <TextInput id="password2" type="password" required shadow /> */}
        <Textarea {...register("about", { required: true })}  id="about" name='about' type="about" placeholder="Tell Something about yourself" rows={2} col={30}  shadow />
      {errors.about && <span className='px-2 py-2 text-red-500'>About is required</span>}
      </div>
       </div>
     
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
            terms and conditions
          </Link>
        </Label>
      </div>
     <div className='flex gap-5'>
                <Button type="submit" className='w-full'>Sign Up</Button>
              <Button color={'red'} type="reset" className='w-full'>Reset</Button>
             </div>
      <Link to={'/login'}><p className='text-center text-xl text-sky-500'>Already Have an Account?</p></Link>
    </form>
    </div>
    
    </>
  )
}

export default SignUp