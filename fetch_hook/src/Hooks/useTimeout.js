




import {useState,useEffect} from "react"
import React from 'react';

const  useTimeout=(delay)=> {
    const [showText,setShowText]=useState(false)

    useEffect(()=>{
    let timer =setTimeout(() => {
        setShowText(true)
    }, delay);

    return()=>{
        clearTimeout(timer)
    }
    },[showText,delay ])
      
return showText
  
}

export default useTimeout;