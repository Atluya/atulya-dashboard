import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCollege } from '../../app/redux/reducers/collegeReducer';
import { useDispatch } from 'react-redux';
import { getCollegeAction } from '../../app/redux/api/college';
import Form from '@rjsf/material-ui/v5';
import { putApi } from '../../app/api-interface';
import { toast } from 'react-toastify';

export default function CoursesPage() {
  
  const data = useSelector(selectCollege);
  const dispatch = useDispatch()

  const submitHandler = async({ formData }, e) => {
    e.preventDefault();
    console.log(formData);
    await putApi("/colleges/logged-in-college", {courses: formData});
    dispatch(getCollegeAction());
    toast.success("Courses Data Updated Successfully!");
  }

  const uiSchema = {
    "items": {
      "branches": {
        "items": {
          "information": {
            "ui:widget": "textarea",
            "ui:options": {
              rows: 5
            }
          }
        }
      }
    }
  }

  const schema = {
    "title": "Courses Information",
    "description": "Details of Courses of the College",
    "type": "array",
    items: {
      type: "object",
      properties: {
        "name": {
            type: "string"
        },
        "branches": {
          type: "array",
          items: {
            type: "object",
            properties: {
              "name": {
                type: "string"
              },
              "information": {
                type: "string"
              }
            }
          }
        },
        "duration": {
          type: "number"
        },
        "fees": {
          type: "number"
        },
        "feeStructureLink": {
          type: "string"
        },
        "fullTime": {
          type: "boolean",
          "enum": [true, false]
        },
        "admissionThrough": {
          type: "string"
        }
      }
    }
  };

  return (
    <>
      <Form schema={schema} formData={data["courses"]} onSubmit={submitHandler} uiSchema={uiSchema} />
    </>
  )
}
