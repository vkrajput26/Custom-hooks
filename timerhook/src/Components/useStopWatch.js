

import React, { useRef, useState } from 'react';

const useStopWatch = (val) => {
    const [num,setNum]=useState(val)
    const stopRef =useRef()
    const handleStart=()=>{
      stopRef.current=
      setInterval(() => {
          setNum((prev)=>prev-1)
        
      }, 1000);

    
    }

    const stopTimer=()=>{
       clearInterval( stopRef.current)
    }

    return {
        num,
        handleStart,
        stopTimer
    }
};

export default useStopWatch;