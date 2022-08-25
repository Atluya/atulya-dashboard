import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AdminPage from "./pages/Admin";
import GeneralInfoPage from "./pages/College/GeneralInfoPage";
import CollegePage from "./pages/College";
import TourPage from "./pages/College/TourPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import CollegeTable from "./pages/Admin/CollegeTable";
import GalleryPage from "./pages/College/GalleryPage";

export default function AppRoutes() {
  return (
    <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/login" element={<LoginPage/>} />
        <Route path="/admin" element={<AdminPage/>} />
        
        <Route path="/college" element={<CollegePage><GeneralInfoPage/></CollegePage>}/>
        <Route path="/college/tour" element={<CollegePage><TourPage/></CollegePage>}/>
        <Route path="/college/gallery" element={<CollegePage><GalleryPage/></CollegePage>}/>
        <Route path="/college/tour" element={<CollegePage><TourPage/></CollegePage>}/>
        <Route path="/college/tour" element={<CollegePage><TourPage/></CollegePage>}/>
        <Route path="/college/tour" element={<CollegePage><TourPage/></CollegePage>}/>

        
        <Route exact path="/admin/colleges" element={<AdminPage><CollegeTable/></AdminPage>} />
        {/* <Route path="/college/tour" element={<TourPage/>} /> */}
    </Routes>
  )
}

