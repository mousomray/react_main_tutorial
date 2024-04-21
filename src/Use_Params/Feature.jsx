import React from 'react'
import { useParams } from 'react-router-dom'

const Feature = () => {

    const{id,name} = useParams();
  return (
    <>
    <h3>This is Feature Child section</h3>

    <h5>Id: {id}</h5>
    <h5>Name: {name}</h5>
    


    </>
  )
}

export default Feature
