import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AdminPage from "./pages/Admin";
import CollegePage from "./pages/College";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";

export default function AppRoutes() {
  return (
    <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/login" element={<LoginPage/>} />
        <Route exact path="/admin" element={<AdminPage/>} />
        <Route exact path="/college" element={<CollegePage/>} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

const NotFound = () => <div>Path Is incorrect</div>;

