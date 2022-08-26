import react, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { getApi, putApi, postApi } from '../../app/api-interface';
import { toast } from 'react-toastify';
import { Container, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

export default function CollegeDisputes() {
  let {college_id} = useParams();
  const [ShowScreen, setShowScreen] = useState(false);
  const [previousDisputes, setPreviousDisputes] = useState([])
  const [remark, setRemark] = useState("");
  const navigate = useNavigate();
  const getDisputes = async() => {
      try{
          const response = await getApi(`/disputes/?college_id=${college_id}`)
          let data = response.data
          console.log(response)
          console.log(data)
          setPreviousDisputes(data)
          setShowScreen(true)
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

//   const gotoDispute = (dispute_id)=>{
//   navigate(`/admin/disputes/${dispute_id}`);
//     }
  return (
    <>
    {ShowScreen ? <>
    
        <Container>
        <h4>Add a Dispute</h4><br/><br/>
            <form onSubmit={submitHandler}>
                <br />
                <div className="form-group">
                    <label htmlFor="remark">Remark</label><br />
                    <input onChange={(e)=>setRemark(e.target.value)} type="text" className='form-control' name='remark' id='remark' required />
                </div>
                <br />
                <button className='btn btn-success' type="submit">Add</button>
            </form>
        {previousDisputes.length>0?<h4>Disputes:</h4>:<></>}
        {
                previousDisputes.map((ele,key)=><div className='row' key={key}>
                    <div className="container">
                        <Paper style={{cursor: 'pointer', margin: '10px auto'}}>
                            <br />
                            <p>Remark: {ele.remark}</p>
                            {<p>{ele.resolved?<>Resolved</>:<>
                            <Button className='btn' onClick={async(e)=>{
                                await resolveDispute(ele.id)
                            }}>Resolve</Button>
                        </>}</p>}
                            <p>{
                            <Button className='btn' onClick={(e) =>{navigate(`/admin/disputes/${ele.id}`)}}>View Details</Button>}</p>
                        </Paper>
                    </div>
                </div>)
            }
        </Container>
        </>: <div>Loading...</div> }
    </>
  )
}