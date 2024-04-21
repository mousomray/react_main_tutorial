import React, { useEffect, useState } from 'react'

const ProductFetch = () => {
    const [prod,setProduct]=useState([])

    const getProduct=async()=>{
        
        const respoinse=await fetch('https://dummyjson.com/products')
        const response=await respoinse.json()
        setProduct(response)

    }

    useEffect(()=>{
        getProduct()
    },[])
    console.log('pp',prod);
  return (
    <>


    <h1>Fetch Product</h1>

    {
        prod?.products?.map((pro,key)=>{
            return (
                <>
               <h1>{key+1}</h1> 
                <h1 key ={pro.id}> {pro?.title}</h1>
                </>
            )
        })
    }
      
    </>
  )
}

export default ProductFetch
