import { Button } from 'flowbite-react';
import React, { useRef } from 'react'
import { useReducer } from 'react';


function reducer(state,action){
  if(action.type == 'incrementCount'){
    return {
      count : state.count +5
    }

  } else if(action.type == 'decrementCount'){
    return {
      count : state.count -5
    }
  }else if(action.type == 'setCount'){
    return {
      count : action.payload
    }

}else if(action.type =='setCountByAmountIncrement'){
  return {
    count : state.count + action.payload
  }
}else if(action.type == 'setCountByAmountdecrement'){
  return {
    count : state.count-action.payload
  }
}
}
const Hooks = () => {
  const [state, dispatch] = useReducer(reducer,{count: 0});

 const countRef =  useRef(null);

 
  return (
    <>
    <div className='flex justify-center mt-10 '>
       <div className='flex flex-col gap-5 justify-center '>
     <Button onClick={() => {
        dispatch({ type: 'incrementCount' })
      }}>
        Increment Count
      </Button>
      
       <Button onClick={() => {
        dispatch({ type: 'decrementCount' })
      }}>
        Decrement Count
      </Button>
      
       <Button onClick={() => {
        dispatch({ type: 'setCount',payload: 5 })
      }}>
        Set Count
      </Button>

      <input type='text' ref={countRef} className='px-3 py-3 border border-black rounded-md ' placeholder='Enter a number'/>
      <p>Hello! the set count is {state.count}</p>
      <Button onClick={() => {
        dispatch({ type: 'setCountByAmountIncrement', payload: parseInt(countRef.current.value) })
        countRef.current.value = "";
      }}>
        Set Count By Amount increament
      </Button>


        <Button onClick={() => {
        dispatch({ type: 'setCountByAmountdecrement', payload: parseInt(countRef.current.value) })
        countRef.current.value = "";
      }}>
        Set Count By Amount Decrement
      </Button>

   </div>
    </div>
    </>
  )
}

export default Hooks;