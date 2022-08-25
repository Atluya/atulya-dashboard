import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCollege } from '../../app/redux/reducers/collegeReducer';
import { useDispatch } from 'react-redux';
import { getCollegeAction } from '../../app/redux/api/college';
import Form from '@rjsf/material-ui/v5';
import { putApi } from '../../app/api-interface';
import { toast } from 'react-toastify';

export default function TourPage() {
  
  const data = useSelector(selectCollege);
  const dispatch = useDispatch()

  const submitHandler = async({ formData }, e) => {
    e.preventDefault();
    await putApi("/colleges/logged-in-college", {tour: formData});
    await dispatch(getCollegeAction());
    toast.success("Tour Updated Successfully!")
  }

  const uiSchema = {
    "items": {
      "description": {
        "ui:widget": "textarea",
        "ui:options": {
          rows: 5
        }
      }
    }
  }

  const schema = {
    "title": "Tour Information",
    "description": "Taking Tour of the College",
    "type": "array",
    items: {
      type: "object",
      properties: {
          "title": {
              type: "string"
          },
          "3dImage": {
            type: "string"
          },
          "location": {
            type: "string"
          },
          "thumbnail": {
            type: "string"
          },
          "description": {
            type: "string"
          },
          "voiceover": {
            type: "array",
            items: {
              type: "object",
              properties: {
                "link": {
                  type: "string"
                },
                "language": {
                  type: "string"
                },
              }
            }
          }
      }
    }
  };

  return (
    <>
      <Form schema={schema} formData={data["tour"]} onSubmit={submitHandler} uiSchema={uiSchema} />
    </>
  )
}
