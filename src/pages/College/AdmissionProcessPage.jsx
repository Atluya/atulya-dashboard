import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCollege } from '../../app/redux/reducers/collegeReducer';
import { useDispatch } from 'react-redux';
import { getCollegeAction } from '../../app/redux/api/college';
import Form from '@rjsf/material-ui/v5';
import { putApi } from '../../app/api-interface';
import { toast } from 'react-toastify';

export default function AdmissionProcessPage() {
  
  const data = useSelector(selectCollege);
  const dispatch = useDispatch()

  const submitHandler = async({ formData }, e) => {
    e.preventDefault();
    await putApi("/colleges/logged-in-college", {admissionProcess: formData});
    dispatch(getCollegeAction());
    toast.success("Admission Process Updated Successfully!");
  }

  const uiSchema = {
    body: {
      "ui:widget": "textarea",
      "ui:options": {
        rows: 5
      }
    }
  }

  const schema = {
    "title": "Admission Process Information",
    "description": "Admission Process Details of the College",
    "type": "array",
    items: {
      type: "object",
      properties: {
          "title": {
              type: "string"
          },
          "body": {
            type: "string"
          }
      }
    }
  };

  return (
    <>
      <Form schema={schema} formData={data["admissionProcess"]} onSubmit={submitHandler} uiSchema={uiSchema} />
    </>
  )
}
