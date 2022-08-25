import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCollege } from '../../app/redux/reducers/collegeReducer';
import { useDispatch } from 'react-redux';
import { getCollegeAction } from '../../app/redux/api/college';
import Form from '@rjsf/material-ui/v5';
import { putApi } from '../../app/api-interface';
import { toast } from 'react-toastify';

export default function PlacementStats() {
  
  const data = useSelector(selectCollege);
  const dispatch = useDispatch()

  const submitHandler = async({ formData }, e) => {
    e.preventDefault();
    await putApi("/colleges/logged-in-college", formData);
    dispatch(getCollegeAction());
    toast.success("Placement Stats Updated Successfully!");
  }

  const uiSchema = {}

  const schema = {
    type: 'object',
    properties: {
      avgPackage: {
        type: 'number'
      },
      'placementPercent': {
        type: 'number'
      }
    }
  }

  return (
    <>
      <Form schema={schema} formData={data} onSubmit={submitHandler} uiSchema={uiSchema} />
    </>
  )
}
