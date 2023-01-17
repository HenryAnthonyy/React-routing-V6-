import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
     
    const params = useParams();

  return (
    <section>
        <h1>ProductDetail</h1>
        <h1>{params.productID}</h1>
    </section>
  )
}

export default ProductDetail