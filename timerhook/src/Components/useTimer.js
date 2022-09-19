

import React, { useRef, useState } from 'react';

const useTimer = (initaltime) => {
    const [count,setCount] =useState(initaltime)
    const ref=useRef() 
    
    const handleClick=()=>{
     ref.current=   setInterval(() => {
            
            setCount((prev)=>prev-1)
        }, 1000);
    };

    const handleReset=()=>{
        clearInterval( ref.current)
        setCount(0)
    }

    const handleStop=()=>{
        clearInterval( ref.current)
    }

   const calculateTime= (sec)=>{
        const hr= Math.floor(sec/3600)
        const min=Math.floor((sec%3600)/60 )
        const sc=Math.floor((sec%3600)%60 );
        const h= hr>9 ? `${hr} hours`: `0${hr} hour`;
        const m=min>9 ? `${min} mins` : `0${min} min`;
        const s= sc>9 ? `${sc} seconds` : `9${sc} seconds`
        return `${h} ${m} ${s}`

   }

    return {
        count:calculateTime(count) ,
        handleClick,
        handleReset,
        handleStop
    }
};

export default useTimer;