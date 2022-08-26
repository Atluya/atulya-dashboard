import react, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { getApi, putApi, postApi } from '../../app/api-interface';
import { toast } from 'react-toastify';
import { Container, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

export default function DisputesPage() {
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

//   const gotoDispute = (dispute_id)=>{
//   navigate(`/admin/disputes/${dispute_id}`);
//     }
  return (
    <>
    {ShowScreen ? <>
    
        <Container>
        {previousDisputes.length>0?<h4>Disputes:</h4>:<></>}
        {
                previousDisputes.map((ele,key)=><div className='row' key={key}>
                    <div className="container">
                        <Paper style={{cursor: 'pointer', margin: '10px auto'}}>
                            <br />
                            <p>Remark: {ele.remark}</p>
                            {<p>{ele.resolved?<>Resolved</>:<>
                            Not Resolved
                        </>}</p>}
                            <p>{
                            <Button className='btn' onClick={(e) =>navigate(`/college/disputes/${ele.id}`)}>View Details</Button>}</p>
                        </Paper>
                    </div>
                </div>)
            }
        </Container>
        </>: <div>Loading...</div> }
    </>
  )
}