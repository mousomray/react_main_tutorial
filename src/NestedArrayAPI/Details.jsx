import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const {id1,id2}=useParams()
    const [cart,setCart]=useState()
    const getCart=async()=>{
        const response=await axios.get(`https://dummyjson.com/carts/${id1}`)
        setCart(response.data.products)
    }
    useEffect(()=>{
        getCart()
    },[])
    console.log(cart)
;
    console.log(id1,id2);
  return (
    <>
    {
        cart?.map((item)=>{
           if(item.id==id2){
                return(
                    <>
                    <h2>{item.title}</h2>
                    <h2>{item.price}</h2>
                    </>
                )
            }
        })
    }
    </>
  )
}

export default Details


