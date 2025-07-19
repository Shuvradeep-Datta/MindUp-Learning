import { Button } from 'flowbite-react';
import React, { useMemo, useState } from 'react'

const Performance = () => {

const [number,setNumber]= useState([10,20,30,40,50]);
  const [count,setCount] = useState(0);

  function calculateSum(){
    console.log("Calculate Sum");
    let i=0;
    while(i<10000000000) i++;
    const sum = number.reduce((acc,value)=>acc+value,0);
    return sum;
    
  }  

  const sum = useMemo(calculateSum,[number]);

  
  return (
    <>
      <div>
        <div className='h-screen flex flex-col justify-center items-center gap-2'>
          <h2>Example of Performance Hook || Good to see you again.</h2>
          <h2>Example of UseMemo</h2>
          <p>Sum : {sum}</p>
          <h2>Count : {count }</h2>

          <Button color="indigo" onClick={() => setCount(count + 1)}>Click Me</Button>
        </div>
      </div>
    </>
  )
}

export default Performance