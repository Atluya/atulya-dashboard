import { Container, Paper } from '@mui/material'
import React, { useEffect, useState,useParams } from 'react'
import { deleteApi, getApi, postApi, putApi } from '../../app/api-interface'
import jwt_decode from "jwt-decode"
import { toast } from 'react-toastify'
import Button from '@mui/material/Button';

export default function DisputesPage() {

    const [previousDisputes, setPreviousDisputes] = useState([])

    const [college_id, setCollege_id] = useState("");
    const [remark, setRemark] = useState("");
    const [dispute_id, setDispute_id] = useState("");
    
    const getDisputes = async() => {
        try{
            const response = await getApi(`/disputes/`)
            let data = response.data
            setPreviousDisputes(data)
        }catch(e){
            toast.error("Some Error Occurred!")
        }
    }

    useEffect(()=>{
        getDisputes();
    }, [])

    const submitHandler = async(e) => {
        e.preventDefault();
        const thePayload = {
            remark
        }
        try{
            const response = await postApi(`/disputes/college/${college_id}`, thePayload);
            toast.success("Dispute Added Successfully!")
            await getDisputes();
        }catch(e){
            toast.error("Some Error Occurred!")
        }
    }

    const resolveDispute = async(dispute_id) => {
        try{
            const response = await putApi(`/disputes/${dispute_id}`);
            toast.success("Dispute Resolved Successfully!")
            await getDisputes();
        }catch(e){
            toast.error("Some Error Occurred!")
        }


    }




  return (
    <>
        <Container>
            <h4>Add a Dispute</h4>
            <form onSubmit={submitHandler}>
                <br />
                <div className="form-group">
                    <label htmlFor="college_id">College ID</label><br />
                    <input onChange={(e)=>setCollege_id(e.target.value)} type="text" className='form-control' name='college_id' id='college_id' required />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="remark">Remark</label><br />
                    <input onChange={(e)=>setRemark(e.target.value)} type="text" className='form-control' name='remark' id='remark' required />
                </div>
                <br />
                <button className='btn btn-success' type="submit">Add</button>
            </form>
            <br /><br />

            {previousDisputes.length>0?<h4>Disputes:</h4>:<></>}
            {
                previousDisputes.map((ele,key)=><div className='row' key={key}>
                    <div className="container">
                        <Paper style={{cursor: 'pointer', margin: '10px auto'}}>
                            <br />
                            <h6>College ID: {ele.collegeId}</h6>
                            <p>Remark: {ele.remark}</p>
                            <p>{ele.resolved?<>Resolved</>:<>
                            <Button className='btn' onClick={async(e)=>{
                                await resolveDispute(ele.id)
                            }}>Resolve</Button>
                            </>}</p>
                        </Paper>
                    </div>
                </div>)
            }

        </Container>
    </>
  )
}
