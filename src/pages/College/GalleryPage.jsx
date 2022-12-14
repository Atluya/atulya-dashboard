import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCollege } from '../../app/redux/reducers/collegeReducer';
import { useDispatch } from 'react-redux';
import { getCollegeAction } from '../../app/redux/api/college';
import Form from '@rjsf/material-ui/v5';
import { putApi } from '../../app/api-interface';
import { toast } from 'react-toastify';

export default function GalleryPage() {
  
  const data = useSelector(selectCollege);
  const dispatch = useDispatch()

  const submitHandler = async({ formData }, e) => {
    e.preventDefault();
    await putApi("/colleges/logged-in-college", {gallery: formData});
    await dispatch(getCollegeAction());
    toast.success("Gallery Updated Successfully!")
  }

  const uiSchema = {}

  const schema = {
    "title": "Gallery Information",
    "description": "Gallery of the College",
    "type": "array",
    items: {
      type: "object",
      properties: {
          "caption": {
              type: "string",
          },
          "mediaType": {
            type: "string",
            enum: ["image", "video"]
          },
          "link": {
            type: "string"
          }
      }
    }
  };

  return (
    <>
      <Form schema={schema} formData={data["gallery"]} onSubmit={submitHandler} uiSchema={uiSchema} />
    </>
  )
}
