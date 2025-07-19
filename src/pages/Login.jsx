import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { loginUser } from '../services/AuthService';
import { useAuth } from '../context/AuthContext';
function Login() {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({mode:"onChange"});
 const navigation = useNavigate();

  const {login,user,token}= useAuth();
  const onSubmit = async(data) => {
  try{
      console.log(data);
    const result = await loginUser(data);
    console.log(result);
    toast.success("Logged in Successfully");
    login(result.token,result.user)
    navigation("/dashboard/home")
  }catch(error){
    console.log(error);
    toast.error(error?.response?.data?.message)
    
  }finally{

  }
  }
  return (
    <>
       <div className='flex justify-center mt-10 ml-10 mr-10 '>
         <form onSubmit={handleSubmit(onSubmit)} className="flex w-full md:w-2/4 flex-col gap-4 p-10 rounded-xl shadow-2xl bg-white border border-gray-200 dark:bg-gray-700 dark:rounded-xl dark:shadow-2xl">
         <h1 className='text-center text-3xl'>Login Here</h1>
         <div>
           <div className="mb-2 block">
             <Label htmlFor="email">Your email</Label>
           </div>
           <TextInput {...register("email", {
             required: "Email is required",
              })} className='' id="email" type="email" placeholder="Enter your Email"  shadow />
          {errors.email && <span className='text-base px-2 py-2 text-red-500'>{errors.email.message}</span>}
         </div>
         <div>
           <div className="mb-2 block">
             <Label htmlFor="password">Your password</Label>
           </div>
           <TextInput {...register("password", { required: "Password is required",
             minLength:{value:3
          ,message:"Password must be 3 Character"}
            })} id="password" type="password" placeholder="Enter your Password"  shadow />
            {errors.password && <span className='text-base px-2 py-2 text-red-500'>{errors.password.message}</span>}
         </div>
        <div className='flex gap-5'>
           <Button type="submit" className='w-full'>Login</Button>
         <Button color={'red'} type="reset" className='w-full'>Reset</Button>
        </div>
        
       </form>
       </div>
       
       </>
  )
}

export default Login