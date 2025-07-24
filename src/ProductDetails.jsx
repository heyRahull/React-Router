import React from 'react'
import { useParams } from 'react-router'

const ProductDetails = () => {

    const paramId = useParams();
    console.log(paramId)

  return (
    <div style={{textAlign:'center'}}>
        <h1>Product Details Page</h1>
        <h3>Prodcut id is : {paramId.id}</h3>
    </div>
  )
}

export default ProductDetails