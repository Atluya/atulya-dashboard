import React, { useEffect, useState } from 'react'
import Form from '@rjsf/material-ui/v5';
import { postApi, putApi } from '../../app/api-interface';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function AddAdmin() {

    const navigate = useNavigate();

  const submitHandler = async({ formData }, e) => {
    e.preventDefault();
    try{
        const response = await postApi("/superadmins", formData);
        toast.success("Superadmin Created Successfully!");
        navigate("/admin/superadmins")
    }catch(e){
        if(e.response.status === 409){
            toast.error("Email Already Exists!");
            return;
        }
        toast.error("Some Error Occurred!");
    }
  }

  const uiSchema = {}

  const schema = {
    type: 'object',
    properties: {
      email: {
        type: 'string'
      },
      'name': {
        type: 'string'
      },
      contactNo: {
        type: 'number'
      }
    }
  }

  return (
    <>
      <Form schema={schema} onSubmit={submitHandler} uiSchema={uiSchema} />
    </>
  )
}
