import { notFound } from 'next/navigation';
import React from 'react'

async function Review({params}: {params: Promise<{productId: string; reviewId: string}>}) {
    const{productId, reviewId} = await params;
    if(parseInt(reviewId)>1000){
      notFound()
    }
  return (
    <div>Review {reviewId} of product {productId} </div>
  )
}

export default Review