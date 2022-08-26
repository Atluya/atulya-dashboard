import { Container, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { deleteApi, getApi, postApi } from '../../app/api-interface'
import jwt_decode from "jwt-decode"
import { toast } from 'react-toastify'

export default function UpdatesPage() {

    const [previousUpdates, setPreviousUpdates] = useState([])

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [relevantLink, setRelevantLink] = useState("");
    const [imageLink, setImageLink] = useState("");

    const getUpdates = async() => {
        const data = jwt_decode(localStorage.getItem("token"))
        const collegeId = data.data.userData.id
        try{
            const response = await getApi(`/updates/college/${collegeId}`)
            let data = response.data
            setPreviousUpdates(data)
        }catch(e){
            toast.error("Some Error Occurred!")
        }
    }

    useEffect(()=>{
        getUpdates();
    }, [])

    const submitHandler = async(e) => {
        e.preventDefault();
        const thePayload = {
            title, body, imageLink, relevantLink
        }
        try{
            const response = await postApi(`/updates`, thePayload);
            toast.success("Update Added Successfully!")
            await getUpdates();
        }catch(e){
            toast.error("Some Error Occurred!")
        }
    }

    const deleteUpdate = async(id) => {
        try{
            const response = await deleteApi(`/updates/${id}`);
            toast.success("Update Deleted Successfully!")
            await getUpdates();
        }catch(e){
            toast.error("Some Error Occurred!")
        }
    }




  return (
    <>
        <Container>
            <h4>Add an Update</h4>
            <form onSubmit={submitHandler}>
                <br />
                <div className="form-group">
                    <label htmlFor="title">Title</label><br />
                    <input onChange={(e)=>setTitle(e.target.value)} type="text" className='form-control' name='title' id='title' required />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="body">Body</label><br />
                    <input onChange={(e)=>setBody(e.target.value)} type="text" className='form-control' name='body' id='body' required />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="imageLink">Image Link</label><br />
                    <input onChange={(e)=>setImageLink(e.target.value)} type="text" className='form-control' name='imageLink' id='imageLink' required />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="relevantLink">Relevant Link</label><br />
                    <input onChange={(e)=>setRelevantLink(e.target.value)} type="text" className='form-control' name='relevantLink' id='relevantLink' required />
                </div>
                <br />
                <button className='btn btn-success' type="submit">Add</button>
            </form>
            <br /><br />

            {previousUpdates.length>0?<h4>Previous Updates:</h4>:<></>}
            {
                previousUpdates.map((ele,key)=><div className='row' key={key}>
                    <div className="container">
                        <Paper style={{cursor: 'pointer', margin: '10px auto'}}>
                            <br />
                            <h6>{ele.title}</h6>
                            <p>{ele.body}</p>
                            <img src={ele.imageLink}/>
                            <p>{ele.createdAt}</p>
                            <a href={ele.relevantLink}>Link</a>
                            <br />
                            <br />
                            <button className='btn btn-danger' onClick={async(e)=>{
                                await deleteUpdate(ele.id)
                            }}>Delete</button>
                            <br />
                            <br />
                        </Paper>
                    </div>
                </div>)
            }

        </Container>
    </>
  )
}
