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
            <Route exact path="/tour" element={<GeneralInfoPage/>} />
            <Route exact path="/gallery" element={<GeneralInfoPage/>} />
            <Route exact path="/location" element={<GeneralInfoPage/>} />
            <Route exact path="/social-media" element={<GeneralInfoPage/>} />
            <Route exact path="/admission-process" element={<GeneralInfoPage/>} />
            <Route exact path="/documents" element={<GeneralInfoPage/>} />
            <Route exact path="/clubs" element={<GeneralInfoPage/>} />
            <Route exact path="/courses" element={<GeneralInfoPage/>} />
            <Route exact path="/alumni" element={<GeneralInfoPage/>} />
            <Route exact path="/placements" element={<GeneralInfoPage/>} />
            <Route exact path="/facilities" element={<GeneralInfoPage/>} />
            <Route exact path="/extra-curricular" element={<GeneralInfoPage/>} />
            <Route exact path="/scholarships" element={<GeneralInfoPage/>} />
            <Route exact path="/important-links" element={<GeneralInfoPage/>} />
            <Route exact path="/contact-details" element={<GeneralInfoPage/>} />
            <Route exact path="/hostel" element={<GeneralInfoPage/>} />
            <Route exact path="/ads" element={<GeneralInfoPage/>} />
            <Route exact path="/review" element={<GeneralInfoPage/>} />


            <Route exact path="/disputes" element={<GeneralInfoPage/>} />

        </Routes>
    </DashboardContent>
    </>
  )
}