/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DesignPage from "../pages/Design/DesignPage";
import ReviewPage from "../pages/Review/ReviewPage";
import AboutPage from "../pages/AboutPage";
import PremiumTemplate from "../pages/Design/PremiumDesign/PremiumTemplate";
import Envelope from "../components/PremiumTemplateComponent/Envelope";
import VIPDesign from "../pages/Design/VIpDesign/VIPDesign";
import BasicDesign1 from "../pages/Design/BasicDesign/BasicDesign1";
import BasicDesign2 from "../pages/Design/BasicDesign/BasicDesign2";
import BasicDesign3 from "../pages/Design/BasicDesign/BasicDesign3";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import NavHome from "../components/NavHome";

const HomePageRoute = () => {
  const location = useLocation();

  const showNavHome = ["/home", "/design", "/review", "/about"].includes(location.pathname);

  return (
    <>
      {showNavHome && <NavHome />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/envelope" element={<Envelope isOpened={false} onOpen={() => {}} GuestName="Tamu" />} />
        <Route path="/premium-invitation" element={<PremiumTemplate />} />
        <Route path="/vip-invitation" element={<VIPDesign />} />
        <Route path="/basic1-invitation" element={<BasicDesign1 />} />
        <Route path="/basic2-invitation" element={<BasicDesign2 />} />
        <Route path="/basic3-invitation" element={<BasicDesign3 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default HomePageRoute;
