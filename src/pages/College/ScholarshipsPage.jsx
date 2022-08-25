import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCollege } from '../../app/redux/reducers/collegeReducer';
import { useDispatch } from 'react-redux';
import { getCollegeAction } from '../../app/redux/api/college';
import Form from '@rjsf/material-ui/v5';
import { putApi } from '../../app/api-interface';
import { toast } from 'react-toastify';

export default function ScholarshipsPage() {
  
  const data = useSelector(selectCollege);
  const dispatch = useDispatch()

  const submitHandler = async({ formData }, e) => {
    e.preventDefault();
    await putApi("/colleges/logged-in-college", {scholarships: formData});
    dispatch(getCollegeAction());
    toast.success("Scholarships Updated Successfully!");
  }

  const uiSchema = {}

  const schema = {
    "title": "Scholarships Information",
    "description": "Scholarship Details of the College",
    "type": "array",
    items: {
      type: "object",
      properties: {
        name: {
            type: "string"
        },
        benefactor: {
            type: "string"
        },
        eligibility: {
            type: "string"
        },
        relevantLink: {
            type: "string"
        }
      }
    }
  };

  return (
    <>
      <Form schema={schema} formData={data["scholarships"]} onSubmit={submitHandler} uiSchema={uiSchema} />
    </>
  )
}
