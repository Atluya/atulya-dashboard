import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCollege } from '../../app/redux/reducers/collegeReducer';
import { useDispatch } from 'react-redux';
import { getCollegeAction } from '../../app/redux/api/college';
import Form from '@rjsf/material-ui/v5';
import { putApi } from '../../app/api-interface';
import { toast } from 'react-toastify';

export default function SocialMediaPage() {
  
  const data = useSelector(selectCollege);
  const dispatch = useDispatch()

  const submitHandler = async({ formData }, e) => {
    e.preventDefault();
    await putApi("/colleges/logged-in-college", {socialMedia: formData});
    dispatch(getCollegeAction());
    toast.success("Social Media Updated Successfully!");
  }

  const uiSchema = {}

  const schema = {
    "title": "Social Media Information",
    "description": "Social Media Details of the College",
    "type": "array",
    items: {
      type: "object",
      properties: {
          "app": {
              type: "string"
          },
          "link": {
            type: "string"
          }
      }
    }
  };

  return (
    <>
      <Form schema={schema} formData={data["socialMedia"]} onSubmit={submitHandler} uiSchema={uiSchema} />
    </>
  )
}
