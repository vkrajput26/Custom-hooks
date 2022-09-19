import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import PinInput from './PinInput';
import PropTypes from "prop-types"

const Pin = ({length,setPin}) => {
   const [inputBoxlen]=useState(new Array(length).fill("a"))
   const [inputBoxValue]=useState(new Array(length).fill(""));
   const inputRef=useRef([])

   useEffect(()=>{
    console.log(inputRef)
   },[])

   const onChangeHandler=(e,index)=>{
    inputBoxValue[index]=e.target.value;

    if(e.target.value.length>0 && index<length-1){
        inputRef.current[index+1].focus();
    }
    setPin(inputBoxValue.join(""))
   }

   const backspaceHandler=(e,index)=>{
    if(index>0){
        inputRef.current[index-1].focus();
    }
    inputBoxValue[index]=e.target.value
    setPin(inputBoxValue.join(""));
   }

   const handlePaste=(e)=>{
    e.preventDefault();
    const data=e.clipboardData
    .getData("text")
    .split("")
    .filter((_,index)=>index<length);

    data.forEach((character,index)=>{
        inputBoxValue[index]=character;
        inputRef.current[index].value=character;

        if(index<length-1){
            inputRef.current[index+1].focus()
        }
    })
   }
    return (
        <div>
            <div onPaste={handlePaste}>
                {
                     inputBoxlen.map((_,index)=>{
                        return(
                            <PinInput 
                            key={index} ref={(element)=>(inputRef.current[index]=element)}
                            onChangeHandler={(e)=>onChangeHandler(e,index)}
                            onBackspace={(e)=>backspaceHandler(e,index)}
                            />
                        )
                     })   
                }
            </div>
            
        </div>
    );
};

export default Pin;

Pin.propTypes = {
    length: PropTypes.number.isRequired,
    setPin: PropTypes.func,
  };