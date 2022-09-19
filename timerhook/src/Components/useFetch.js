

import React, { useEffect, useState } from 'react';
import axios from 'axios';
const useFetch = () => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)

    const handleFetch=()=>{
        setLoading(true)
      return  axios.get("http://api.github.com/users?q=Masai")
        .then((res)=>{
            setData(res.data)
            setLoading(false)
        })
        .then((err)=>{
            setError(true)
            setLoading(false)
        })
    }

    useEffect(()=>{
        handleFetch()
    },[])
   return {
    data,
    loading,
    error,
    handleFetch
   }
};

export default useFetch;