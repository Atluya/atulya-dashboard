import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCollege } from '../../app/redux/reducers/collegeReducer';
import { useDispatch } from 'react-redux';
import { getCollegeAction } from '../../app/redux/api/college';
import Form from '@rjsf/material-ui/v5';
import { putApi } from '../../app/api-interface';
import { toast } from 'react-toastify';

export default function HostelPage() {
  
  const data = useSelector(selectCollege);
  const dispatch = useDispatch()

  const submitHandler = async({ formData }, e) => {
    e.preventDefault();
    console.log(formData)
    let theData = JSON.parse(JSON.stringify(formData))
    theData["boysHostel"]["cost"] = theData["boysHostel"]["cost"].toString()
    theData["boysHostel"]["occupancy"] = theData["boysHostel"]["occupancy"].toString()
    theData["girlsHostel"]["cost"] = theData["girlsHostel"]["cost"].toString()
    theData["girlsHostel"]["occupancy"] = theData["girlsHostel"]["occupancy"].toString()
    await putApi("/colleges/logged-in-college", {hostelInfo: theData});
    await dispatch(getCollegeAction());
    toast.success("Hostel Data Updated Successfully!")
  }

  const uiSchema = {
      "information": {
        "ui:widget": "textarea",
        "ui:options": {
          rows: 5
        }
      },
      "boysHostel": {
        occupancy: {
            information: {
                "ui:widget": "textarea",
                "ui:options": {
                    rows: 5
                }
            }
        }
      },
      "girlsHostel": {
        occupancy: {
            information: {
                "ui:widget": "textarea",
                "ui:options": {
                    rows: 5
                }
            }
        }
      },
  }

  const schema = {
    "title": "Hostel Information",
    "description": "Hostel Information of the College",
    "type": "object",
    "properties": {
      "information": {
        "type": "string",
      },
      "boysHostel": {
        "type": "object",
        properties: {
            occupancy: {
                type: "number",
            },
            cost:{
                type: "number"
            }
        }
      },
      "girlsHostel": {
        "type": "object",
        properties: {
            occupancy: {
                type: "number",
            },
            cost:{
                type: "number"
            }
        }
      },
    }
  };


  return (
    <>
    <Form schema={schema} formData={data["hostelInfo"]} onSubmit={submitHandler} uiSchema={uiSchema} />
    </>
  )
}
