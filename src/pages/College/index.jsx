import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { DashboardContent } from '../../components/CollegeDashboard';
import GeneralInfoPage from './GeneralInfoPage';

export default function CollegePage() {
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