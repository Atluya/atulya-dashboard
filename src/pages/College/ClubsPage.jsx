import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCollege } from '../../app/redux/reducers/collegeReducer';
import { useDispatch } from 'react-redux';
import { getCollegeAction } from '../../app/redux/api/college';
import Form from '@rjsf/material-ui/v5';
import { putApi } from '../../app/api-interface';
import { toast } from 'react-toastify';

export default function ClubsPage() {
  
  const data = useSelector(selectCollege);
  const dispatch = useDispatch()

  const submitHandler = async({ formData }, e) => {
    e.preventDefault();
    await putApi("/colleges/logged-in-college", {clubs: formData});
    dispatch(getCollegeAction());
    toast.success("Clubs Data Updated Successfully!");
  }

  const uiSchema = {
    "items": {
      "information": {
        "ui:widget": "textarea",
        "ui:options": {
          rows: 5
        }
      },
      "eligibility": {
        "ui:widget": "textarea",
        "ui:options": {
          rows: 5
        }
      }
    }
  }

  const schema = {
    "title": "Clubs Information",
    "description": "Details of Clubs of the College",
    "type": "array",
    items: {
      type: "object",
      properties: {
        "name": {
            type: "string"
        },
        "relevantLink": {
          type: "string"
        },
        "logoLink": {
          type: "string"
        },
        "information": {
          type: "string"
        },
        "eligibility": {
          type: "string"
        }
      }
    }
  };

  return (
    <>
      <Form schema={schema} formData={data["clubs"]} onSubmit={submitHandler} uiSchema={uiSchema} />
    </>
  )
}
