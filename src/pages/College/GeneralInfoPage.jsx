import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCollege } from '../../app/redux/reducers/collegeReducer';
import { useDispatch } from 'react-redux';
import { getCollegeAction } from '../../app/redux/api/college';
import Form from '@rjsf/material-ui/v5';
import { putApi } from '../../app/api-interface';
import { toast } from 'react-toastify';

export default function GeneralInfoPage() {
  
  const data = useSelector(selectCollege);
  const dispatch = useDispatch()

  const submitHandler = async({ formData }, e) => {
    e.preventDefault();
    await putApi("/colleges/logged-in-college", formData);
    await dispatch(getCollegeAction());
    toast.success("General Info Updated Successfully!")
  }

  const uiSchema = {
      "information": {
        "ui:widget": "textarea",
        "ui:options": {
          rows: 5
        }
      },
      "shortBio": {
        "ui:widget": "textarea",
        "ui:options": {
          rows: 5
        }
      }  
  }

  const schema = {
    "title": "General Information",
    "description": "General Information of the College",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        minLength: 1
      },
      "shortName": {
        "type": "string"
      },
      "yearOfEstablishment": {
        "type": "number"
      },
      "website": {
        "type": "string"
      },
      "affliation": {
        "type": "string"
      },
      "areaInAcres": {
        "type": "number"
      },
      "bannerLink": {
        "type": "string"
      },
      "brochureLink": {
        "type": "string"
      },
      "information": {
        "type": "string"
      },
      "isAutonomous": {
        "type": "boolean",
        "enum": [true, false]
      },
      "isGovtAided": {
        "type": "boolean",
        "enum": [true, false]
      },
      "logo": {
        "type": "string",
      },
      "numberofFaculty": {
        "type": "number",
      },
      "shortBio": {
        "type": "string"
      },
      "studentsEnrolled": {
        type: "string"
      },
      instituteType: {
        type: "string",
        enum: ["Private", "Government"]
      }
    }
  };

  return (
    <>
    <Form schema={schema} formData={data} onSubmit={submitHandler} uiSchema={uiSchema} />
    </>
  )
}
