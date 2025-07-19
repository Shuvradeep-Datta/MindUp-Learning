import { Button } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector, useDispatch } from 'react-redux'
// import { decreaseCounter, increaseCounter, resetCounter, setCount } from '../redux/actions/CounterAction';

import {increament,decreament,reset, setCount, increaseByAmount} from '../redux/slice/CounterSlice'
import { AddNotification, getTodoById } from '../redux/slice/NotifySlice';
function About() {

  const count = useSelector((state)=>state.counter.value);
  const notify = useSelector((state)=>state.notify.Notification);
  const {Notification,error,loading} = useSelector((state)=>state.notify);
  // console.log("notify", notify.length);
  
  


  
  


  const countRef = useRef(null);
  const notifyRef = useRef(null);

  const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getTodoById(1));

  
},[])

  return (
    <div>
      <div>
        <Helmet>
          <title>About</title>
        </Helmet>
      </div>
     <div >
      <h1 className='text-3xl text-center m-5'>Welcome To About Page</h1>
      <h2 className='text-3xl text-center m-5'>Count :{count}</h2>
      
      <div className='flex justify-center gap-4'>
        <Button onClick={()=>dispatch(increament())}>Increament</Button>
      <Button color={'yellow'} onClick={()=>dispatch(decreament())}>Decrement</Button>
      <Button color={'cyan'} onClick={()=>dispatch(reset())}>Reset</Button>
      
      
      </div>
   <div className='flex flex-col items-center '>
       <div className='text-center mt-5 '>
        <input ref={countRef} type='text'  className='border-2 border-gray-500 rounded-lg p-2' placeholder='Enter Value'/>
      <Button onClick={()=>{
       dispatch(setCount(countRef.current.value));
       countRef.current.value ="";
       
      }} className='mt-3'>Click Me</Button>


  
      </div>
   </div>
     <div className='flex flex-col items-center '>
       <div className='text-center mt-5 '>
        <input ref={notifyRef} type='text'  className='border-2 border-gray-500 rounded-lg p-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' placeholder='Enter Value' required/>
      <Button onClick={()=>{
        
        if( notifyRef.current.value == ""){
          alert("field should not be blank")
        }
      //  dispatch(setCount(countRef.current.value));
      dispatch(AddNotification(notifyRef.current.value));
      notifyRef.current.value = "";
      notifyRef.current.focus();
       
      }} className='mt-3'>Click Me</Button>


  
      </div>
   </div>
      </div> 

   {loading && <h2 className='text-3xl text-center m-5'>Data is Loaded...</h2>}   
{/* <h2 className='text-3xl text-center m-5'>Notification :{notify.length}</h2> */}
    <h2 className='text-3xl text-center m-5'>Notification : {notify.length}</h2>
{
  notify.map((notifications ,index)=>{
    return (
      <div key={index} className='text-center m-5'>
        <h3 className='text-xl'>{notifications.title}</h3>
      </div>
    )
  })
}
  {/* <div className='flex justify-center gap-4'>
    <Button onClick={()=>dispatch(AddNotification())}>Increament</Button>
     
    </div>   */}

    
      </div>
  )
}

export default About