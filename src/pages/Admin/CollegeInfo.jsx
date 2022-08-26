import react, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { getApi, putApi, postApi } from '../../app/api-interface';
import { toast } from 'react-toastify';
import { Container, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

export default function CollegeInfo() {
  let {college_id} = useParams();
  const [showScreen, setShowScreen] = useState(false);
  const [collegeData, setCollegeData] = useState({});
  const navigate = useNavigate();

  const getData = async() => {
    try{
        const response = await getApi(`/colleges/college/${college_id}`);
        setCollegeData(response.data.data)
        setShowScreen(true);
        console.log('Hey!')
        console.log(response.data.data)
    }catch(e){
        toast.error("Some Error Occurred!")
        navigate("/admin/colleges")
    }
  }

  useEffect(()=>{
    getData();
  }, [])

  
  return (
    <>
    {showScreen ? <>
        <Container>
        <h4>College Data</h4>
            <Button variant="contained" onClick={(e) =>navigate(`/admin/college/disputes/${college_id}`)}>View Disputes</Button>
            <br /><br />
            <Container>
                
                <br />
                <Paper>
                    <br /><br />
                    <div className="container">
                        <div className="row">
                            <p>ID: {collegeData["id"]}</p>
                        </div>
                        <div className="row">
                            <h6>{collegeData["name"]} - {collegeData["shortName"]}</h6>
                        </div>
                        <div className="row">
                            <h6>{collegeData["name"]} ({collegeData["shortName"]})</h6>
                        </div>
                    </div>
                    <br /><br />
                </Paper>
            </Container>
            </Container>
        </>: <div>Loading...</div> }
    </>
  )
}