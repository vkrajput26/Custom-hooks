

import React from 'react';
import {useState,useEffect} from "react"
import useTimeout from '../Hooks/useTimeout';
const TestComponents=(props)=> {

    // const [showText,setShowText]=useState(false)

    //     useEffect(()=>{
    //     let timer =setTimeout(() => {
    //         setShowText(true)
    //     }, 3000);

    //     return()=>{
    //         clearTimeout(timer)
    //     }
    //     },[showText])
    const showText= useTimeout(6000)
        
    return (
        <div>
            {showText && "Testcomponents"}
        </div>
    );
}

export default TestComponents;