import { Container, Paper } from '@mui/material';
import React, {useEffect, useState} from 'react'
import { getApi, putApi } from '../../app/api-interface';
import { useSelector } from 'react-redux';
import { selectCollege } from '../../app/redux/reducers/collegeReducer';
import { useDispatch } from 'react-redux';
import { getCollegeAction } from '../../app/redux/api/college';
import jwt_decode from "jwt-decode"
import { toast } from 'react-toastify';

export default function ReviewPage() {

    const [showScreen, setShowScreen] = useState(false);
    const [reviewData, setReviewData] = useState(false);

    const data = useSelector(selectCollege);
  const dispatch = useDispatch()

    let getReview = async() => {
        const response = await getApi("/colleges/review-college");
        setReviewData(response.data.data)
        setShowScreen(true)
    }

    useEffect(()=>{
        getReview();
    }, []);

    const unpublishCollege = async() => {
        try{
            let response = await putApi(`/colleges/publish/false`, {})
            toast.success("Unpublished Successfully!")
            dispatch(getCollegeAction())
        }catch(e){
            toast.error("Some Error Occurred!")
        }
    }

    const publishCollege = async() => {
        if(reviewData.errors.length>0){
            toast.error("Please Resolve all Errors before Publishing!");
            return;
        }
        try{
            let response = await putApi(`/colleges/publish/true`, {})
            toast.success("Published Successfully!")
            dispatch(getCollegeAction())
        }catch(e){
            toast.error("Some Error Occurred!")
        }
        
    }

  return (
    <>
    {showScreen?<Container>
        <br /><br />
        <h3>Review of the Data:</h3>
        <br />
        <Paper>
            <br />
            <h4>Errors: ({reviewData.errors.length})</h4>
            <br />
            {reviewData.errors.map((ele, key)=> <p style={{color: 'red'}} key={key}>{ele}</p>)}
            <br />
        </Paper>
        <br />
        <Paper>
            <br />
            <h4>Warnings: ({reviewData.warnings.length})</h4>
            <br />
            {reviewData.warnings.map((ele, key)=> <p style={{color: 'dark-orange'}} key={key}>{ele}</p>)}
            <br />
        </Paper>
        <br />
        <br />
        
        {data["shouldPublish"] ? <button className='btn btn-danger' onClick={()=>unpublishCollege()}>Unpublish College</button>:<button className='btn btn-primary' onClick={()=>publishCollege()}>Publish</button>}
        <br />

    </Container>: <></>}
    </>
  )
}
