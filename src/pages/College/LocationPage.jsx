import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCollege } from '../../app/redux/reducers/collegeReducer';
import { useDispatch } from 'react-redux';
import { getCollegeAction } from '../../app/redux/api/college';
import Form from '@rjsf/material-ui/v5';
import { putApi } from '../../app/api-interface';
import { toast } from 'react-toastify';

export default function LocationPage() {

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  let data = useSelector(selectCollege);

  useEffect(()=>{
    data["longitude"] = data["location"]["coordinates"][0]
    data["latitude"] = data["location"]["coordinates"][1]
  }, [])

  

  const dispatch = useDispatch()

  const submitHandler = async({ formData }, e) => {
    e.preventDefault();
    await putApi("/colleges/logged-in-college", formData);
    await putApi("/colleges/change-location", {
      "latitude": formData["latitude"],
      "longitude": formData["longitude"]
    });
    await dispatch(getCollegeAction());
    toast.success("Location Updated Successfully!")
  }

  const schema = {
    "title": "Location",
    "description": "Location of the College",
    "type": "object",
    "properties": {
      "latitude": {
        "type": "number",
      },
      "longitude": {
        "type": "number"
      },
      "address": {
        "type": "string"
      },
      "city": {
        "type": "string"
      },
      "state": {
        "type": "string"
      }
    }
  };

  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [locationState, setLocationState] = useState([]);

  //getting location
  navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude)
    setLong(position.coords.longitude)
  }, error, {enableHighAccuracy: true, maximumAge: 0})

  //check if allow location is blocked
  useEffect( () => {
  navigator.permissions.query({
    name: 'geolocation'
  }).then((result) => {
      setLocationState(result.state)
  });}, [locationState])

  useEffect( () => {
    navigator.permissions.query({
      name: 'geolocation'
    }).then((result) => {
        setLocationState(result.state)
    });}, [])

  return (
    <>
      <Form schema={schema} formData={data} onSubmit={submitHandler} />
      <div className='row mt-5'>
        <h6>Current Co-ordinates</h6>      
        <p>
          <span>Latitude: {lat}</span><br />
          <span>Longitude: {long}</span>
        </p>
      </div>
    </>
  )
}
