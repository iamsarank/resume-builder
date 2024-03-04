import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";

import { Routes, Route } from "react-router-dom";
import MyAccount from "../Dashboard/user-account/MyAccount";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route
        path="/users/profile/me" element={
          <ProtectedRoute><MyAccount /></ProtectedRoute>} />
    </Routes>
  )
};

export default Routers;
