import React, {useEffect, useState} from 'react'
import { getApi } from '../../app/api-interface';

export default function ReviewPage() {

    let getReview = async() => {
        const response = await getApi("/colleges/review-college");

    }

    useEffect(()=>{
        getReview();
    }, []);

  return (
    <div>Review Page</div>
  )
}
