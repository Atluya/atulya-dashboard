import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCollege } from '../../app/redux/reducers/collegeReducer';
import { useDispatch } from 'react-redux';
import { getCollegeAction } from '../../app/redux/api/college';
import Form from '@rjsf/material-ui/v5';
import { putApi } from '../../app/api-interface';
import { toast } from 'react-toastify';

export default function AlumniPage() {
  
  const data = useSelector(selectCollege);
  const dispatch = useDispatch()

  const submitHandler = async({ formData }, e) => {
    e.preventDefault();
    await putApi("/colleges/logged-in-college", {notableAlumni: formData});
    dispatch(getCollegeAction());
    toast.success("Alumni Updated Successfully!");
  }

  const uiSchema = {
  }

  const schema = {
    "title": "Alumni Information",
    "description": "Details of Notable Alumni of the College",
    "type": "array",
    items: {
      type: "object",
      properties: {
        "name": {
            type: "string"
        },
        "title": {
          type: "string"
        },
        "batch": {
          type: "string"
        },
        "stream": {
          type: "string"
        },
        "relevantLink": {
          type: "string"
        }
      }
    }
  };

  return (
    <>
      <Form schema={schema} formData={data["notableAlumni"]} onSubmit={submitHandler} uiSchema={uiSchema} />
    </>
  )
}
