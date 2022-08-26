import React, {useState, useEffect} from 'react'
import { Container, Paper } from '@mui/material'
import axios from 'axios';
import { getApi } from '../../app/api-interface';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function ReportsPage() {

    const navigate = useNavigate();

    const [showScreen, setShowScreen] = useState(false)
    const [reports, setReports] = useState([]);

    const getReports = async() => {
        try{
            const response = await getApi("/college-reports");
            setReports(response.data.data)
            setShowScreen(true)
        }catch(e){
            toast.error("Some Error Occurred!")
        }
    }

    useEffect(()=>{
        getReports();
    }, []);

  return (
    <>
    {showScreen?<Container>
        <h3>All Reports</h3>
        <br /><br />

        {reports.map((ele, key)=><div key={key} style={{margin: '20px auto'}}>
        <Paper>
            <br />

                <div className="container">
                    <Paper style={{cursor: 'pointer'}} onClick={()=>{
                        navigate(`/admin/college/${ele.collegeData.id}`)
                    }
                    } >
                        <br />
                            <p>College Name: {ele.collegeData.name} ({ele.collegeData.shortName})</p>
                            <p>College ID: {ele.collegeData.id}</p>
                        <br />
                    </Paper>
                </div>
                <br /><br />
                <h5>{ele.title}</h5>
                <p>{ele.body}</p>

            <br />
        </Paper>
        </div>)}

        <br /><br />
    </Container>: <div>Loading...</div> }
    </>
    
  )
}
