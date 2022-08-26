import { Container, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { deleteApi, getApi, postApi, putApi } from '../../app/api-interface'
import jwt_decode from "jwt-decode"
import { toast } from 'react-toastify'
import Button from '@mui/material/Button';
import { useParams} from "react-router-dom";
  

export default function ParticularDisputeCollegePage() {
  const [showScreen, setShowScreen] = useState(false);
    let {dispute_id} = useParams();
    const [previousComments, setPreviousComments] = useState([])
    const [remark, setRemark] = useState("");
    const [Dispute, setDispute] = useState();

    const getDispute = async() => {
        try{
            console.log(`/disputes/${dispute_id}`);
            const dispute = await getApi(`/disputes/${dispute_id}`)
            console.log(dispute)
            setDispute(dispute.data)
            const response = await getApi(`/disputes/comments/${dispute_id}`)
            let data = response.data
            setPreviousComments(data)
            setShowScreen(true);
        }catch(e){
            toast.error("Some Error Occurred!")
        }
    }

    useEffect(()=>{
        getDispute();
    }, [])

    const submitHandler = async(e) => {
        e.preventDefault();
        const thePayload = {
            remark
        }
        try{
            const response = await postApi(`/disputes/comments/${dispute_id}`, thePayload);
            toast.success("Commented successfully!")
            await getDispute();
        }catch(e){
            toast.error("Some Error Occurred!")
        }
    }

  return (
    <>
        <Container>
        {showScreen?<>
            <form onSubmit={submitHandler}>
                <br />
                <h4>Dispute</h4>
                <div className="container">
                        <Paper style={{cursor: 'pointer', margin: '10px auto'}}>
                            <br />
                            <h6>College ID: {Dispute.collegeId}</h6>
                            <p>Remark: {Dispute.remark}</p>
                            <p>{Dispute.resolved?<>Resolved</>:<>
                            Not Resolved
                            </>}</p>
                        </Paper>
                </div>
                <div className="form-group">
                    <label htmlFor="remark">Add a Comment</label><br />
                    <input onChange={(e)=>setRemark(e.target.value)} type="text" className='form-control' name='remark' id='remark' required />
                </div>
                <br />
                <button className='btn btn-success' type="submit">Send</button>
            </form>
            <br /><br />

            {previousComments.length>0?<h4>Comments:</h4>:<></>}
            {
                previousComments.map((ele,key)=><div className='row' key={key}>
                    <div className="container">
                        <Paper style={{cursor: 'pointer', margin: '10px auto'}}>
                            <br />
                            <p>{ele.user==='college'?<>{"College=>  "}</>:<>{"Admin=>  "}</>}{ele.remark}</p>

                        </Paper>
                    </div>
                </div>)
            }
          </>:<></>}
        </Container>
    </>
  )
}
