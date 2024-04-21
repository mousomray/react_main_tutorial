import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'

const AxiosAPI = () => {

const[blog,setblog] = useState([]);

const fetchdata = async() =>{
    const response = await axios.get('https://restapinodejs.onrender.com/api/allBlog');
    setblog(response.data);
}

useEffect(() =>{
    fetchdata();
},[])

  return (
    <>
      {
        blog?.data?.map((value) =>{
            return(
            <div key={value._id}>
                <h1>{value?.title}</h1>
                <p
                
                dangerouslySetInnerHTML={{__html:value?.postText}}
                
                />

            </div>
        )})
      }
    </>
  )
}

export default AxiosAPI
