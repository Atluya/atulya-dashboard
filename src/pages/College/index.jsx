import React, {useState, useEffect} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { DashboardContent } from '../../components/CollegeDashboard';
import AdmissionProcessPage from './AdmissionProcessPage';
import AlumniPage from './AlumniPage';
import ClubsPage from './ClubsPage';
import CoursesPage from './CoursesPage';
import DocumentsPage from './DocumentsPage';
import GalleryPage from './GalleryPage';
import GeneralInfoPage from './GeneralInfoPage';
import LocationPage from './LocationPage';
import PlacementsPage from './PlacementsPage';
import SocialMediaPage from './SocialMediaPage';
import TourPage from './TourPage';

import { useSelector } from 'react-redux';
import { selectCollege } from '../../app/redux/reducers/collegeReducer';
import { useDispatch } from 'react-redux';
import { getCollegeAction } from '../../app/redux/api/college';

export default function CollegePage(props) {

    const [showScreen, setShowScreen] = useState(false);
    const dispatch = useDispatch();
    const data = useSelector(selectCollege);

    const getTheCollegeData = async() => {
        await dispatch(getCollegeAction());
        setShowScreen(true);
    }

    useEffect(()=>{
        if(JSON.stringify(data) === "{}"){
            getTheCollegeData()
        }else{
            setShowScreen(true);
        }
    }, [data]);
    
  return (
    <>
    <DashboardContent>
        {showScreen?<>{props.children}</>:<></>}
    </DashboardContent>
    </>
  )
}