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
import CollegeInfo from "./pages/Admin/CollegeInfo";
import SocialMediaPage from "./pages/College/SocialMediaPage";
import AdmissionProcessPage from "./pages/College/AdmissionProcessPage";
import DocumentsPage from "./pages/College/DocumentsPage";
import ClubsPage from "./pages/College/ClubsPage";
import AddCollege from "./pages/Admin/AddCollege";
import CoursesPage from "./pages/College/CoursesPage";
import AlumniPage from "./pages/College/AlumniPage";
import FacilitiesPage from "./pages/College/FacilitiesPage";
import ExtraCurricularPage from "./pages/College/ExtraCurricular";
import ScholarshipsPage from "./pages/College/ScholarshipsPage";
import ImportantLinks from "./pages/College/ImportantLinksPage";
import ImportantLinksPage from "./pages/College/ImportantLinksPage";
import ContactPage from "./pages/College/ContactPage";
import LocationPage from "./pages/College/LocationPage";

export default function AppRoutes() {
  return (
    <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/login" element={<LoginPage/>} />
        <Route path="/admin" element={<AdminPage/>} />
        
        <Route path="/college" element={<CollegePage><GeneralInfoPage/></CollegePage>}/>
        <Route path="/college/tour" element={<CollegePage><TourPage/></CollegePage>}/>
        <Route path="/college/gallery" element={<CollegePage><GalleryPage/></CollegePage>}/>
        <Route path="/college/social-media" element={<CollegePage><SocialMediaPage/></CollegePage>}/>
        <Route path="/college/admission-process" element={<CollegePage><AdmissionProcessPage/></CollegePage>}/>
        <Route path="/college/documents" element={<CollegePage><DocumentsPage/></CollegePage>}/>
        <Route path="/college/clubs" element={<CollegePage><ClubsPage/></CollegePage>}/>
        <Route path="/college/alumni" element={<CollegePage><AlumniPage/></CollegePage>}/>
        <Route path="/college/facilities" element={<CollegePage><FacilitiesPage/></CollegePage>}/>
        <Route path="/college/extra-curricular" element={<CollegePage><ExtraCurricularPage/></CollegePage>}/>
        <Route path="/college/scholarships" element={<CollegePage><ScholarshipsPage /></CollegePage>}/>
        <Route path="/college/important-links" element={<CollegePage><ImportantLinksPage /></CollegePage>}/>
        <Route path="/college/contact" element={<CollegePage><ContactPage /></CollegePage>}/>
        <Route path="/college/location" element={<CollegePage><LocationPage /></CollegePage>}/>
        {/* <Route path="/college/courses" element={<CollegePage><CoursesPage/></CollegePage>}/>
         */}

        
        <Route exact path="/admin/colleges" element={<AdminPage><CollegeTable/></AdminPage>} />
        <Route exact path="/admin/college/:college_id" element={<AdminPage><CollegeInfo/></AdminPage>} />
        <Route exact path="/admin/add-college" element={<AdminPage><AddCollege/></AdminPage>} />
        {/* <Route path="/college/tour" element={<TourPage/>} /> */}
    </Routes>
  )
}

