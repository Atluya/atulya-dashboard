import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";

export default function AppRoutes() {
  return (
    <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/login" element={<LoginPage/>} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

const NotFound = () => <div>Path Is incorrect</div>;

