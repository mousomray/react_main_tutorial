import React, { useEffect, useState } from 'react'
import CreateContext from './CreateContext'
import axios from 'axios'

const GetContext = ({children}) => {
    const [user, setUser]=useState([])
    const [post, setPost]=useState([])
    
    const getUserData= async()=>{
        const resp=await axios.get('https://jsonplaceholder.typicode.com/users')
        setUser(resp?.data)
    }

    const getPostData=async()=>{
        const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPost(res?.data)
    }

    useEffect(()=>{
        getUserData()
        getPostData()
    },[])

    const allApi={user, post}

    console.log(user);
    console.log(post);

  return (
    <>

        <CreateContext.Provider value={allApi}>
            {children}
        </CreateContext.Provider>

    </>
  )
}

export default GetContext