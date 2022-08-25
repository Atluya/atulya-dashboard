import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCollege } from '../../app/redux/reducers/collegeReducer';
import { useDispatch } from 'react-redux';
import { getCollegeAction } from '../../app/redux/api/college';
import Form from '@rjsf/material-ui/v5';
import { putApi } from '../../app/api-interface';
import { toast } from 'react-toastify';

export default function PlacementsPage() {
  
  const data = useSelector(selectCollege);
  const dispatch = useDispatch()

  const submitHandler = async({ formData }, e) => {
    e.preventDefault();
    await putApi("/colleges/logged-in-college", {placements: formData});
    dispatch(getCollegeAction());
    toast.success("Placements Updated Successfully!");
  }

  const uiSchema = {}

  const schema = {
    "title": "Placements Information",
    "description": "Placements Details of the College",
    "type": "object",
    properties: {
      placements: {
        type: 'object',
        properties: {
          majorRecruiters: {
              type: "array",
              items: {
                type: 'string'
              }
          },
          placementPercent: {
              type: "array",
              items: {
                type: 'object',
                properties: {
                  branch: {
                    type: 'string',
                  },
                  placementPercentage: {
                    type: 'number'
                  }
                }
              }
          },
          placementReportLink: {
              type: "string"
          },
        }
      },
      avgPackage: {
        type: 'number'
      },
      placementPercent: {
        type: 'number'
      }
    }
  };

  return (
    <>
      <Form schema={schema} formData={data["placements"]} onSubmit={submitHandler} uiSchema={uiSchema} />
    </>
  )
}
