import { useEffect, useState } from "react"
import axios from "axios"
const useFetch=()=>{
    const [data,setData]=useState([])
    const [loading,setLoading] =useState(false)
    const [error, setError] =useState(false)

    const fetchData=()=>{
        setLoading(true)
        return axios.get("http://api.github.com/users?q=Masai")
        .then((res)=>{
            setData(res.data)
            setLoading(false)
        })
        .catch((err)=>{
            setError(true)
            setLoading(false)
        })
    }

    useEffect(()=>{

        fetchData()
    },[])


    return {data,loading,error}


}

export default useFetch;
