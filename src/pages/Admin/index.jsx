import React, {useState, useEffect} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { DashboardContent }  from '../../components/Dashboard';
import CollegeTable from './CollegeTable';
import GeneralInfoPage from './GeneralInfoPage';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getToken, getUserRoleFromToken } from '../../utils/functions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function AdminPage(props) {



    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        const role = getUserRoleFromToken(getToken());
        console.log(role);
        if(role!=='superadmin'){
          navigate("/login");
        }
    }, []);
    
    

  return (
    <>
    <DashboardContent>
    <>{props.children}</>
    </DashboardContent>
    </>
  )
}