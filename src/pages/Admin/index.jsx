import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { DashboardContent } from '../../components/Dashboard';
import GeneralInfoPage from './GeneralInfoPage';

export default function AdminPage() {
  return (
    <>
    <DashboardContent>
        <Routes>
            <Route exact path="/" element={<GeneralInfoPage/>} />
        </Routes>
    </DashboardContent>
    </>
    
  )
}
