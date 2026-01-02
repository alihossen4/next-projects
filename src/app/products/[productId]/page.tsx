import React from 'react'

async function ProductDetails({params}: {params: Promise<{productId:string}>}) {
  const productId = (await params).productId;
  return (
    <div>Products details {productId}</div>
  )
}

export default ProductDetails