
import './App.css';
import React from 'react';
import {useState,useEffect} from "react"
import TestComponents from './Components/TestComponents';
import useTimeout from './Hooks/useTimeout';
import useFetch from './Hooks/useFetch';
function App() {
//   const [showText,setShowText]=useState(false)

// useEffect(()=>{
//   let timer =setTimeout(() => {
//     setShowText(true)
//   }, 3000);

//   return()=>{
//     clearTimeout(timer)
//   }
// },[showText])



const {data,loading ,error} =useFetch()
console.log(data)
// const ready= useTimeout(2000)
   return (
    <div className="App">
    {
    //  loading && "Loading"
    }
    <div>
      {
        // data?.map((item,i)=>{
        //   return <div key={i} >
        //     {item.login}
        //   </div>
        // })
      }
    </div>
    {/* <TestComponents/> */}
    </div>
  );
}

export default App;
