import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCollege } from '../../app/redux/reducers/collegeReducer';
import { useDispatch } from 'react-redux';
import { getCollegeAction } from '../../app/redux/api/college';
import Form from '@rjsf/material-ui/v5';
import { putApi } from '../../app/api-interface';
import { toast } from 'react-toastify';

export default function ContactPage() {
  
  const data = useSelector(selectCollege);
  const dispatch = useDispatch()

  const submitHandler = async({ formData }, e) => {
    e.preventDefault();
    await putApi("/colleges/logged-in-college", {contactDetails: formData});
    dispatch(getCollegeAction());
    toast.success("Contacts Updated Successfully!");
  }

  const uiSchema = {}

  const schema = {
    "title": "Contact Information",
    "description": "Contacts of the College",
    "type": "object",
    properties: {
        emails: {
            type: "array",
            items: {
                type: "string"
            }
        },
        contactNumbers: {
            type: "array",
            items: {
                type: "string"
            }
        }
    }
  };

  return (
    <>
      <Form schema={schema} formData={data["contactDetails"]} onSubmit={submitHandler} uiSchema={uiSchema} />
    </>
  )
}
