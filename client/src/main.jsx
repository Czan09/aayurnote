import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import LoginPage from "./pages/loginpage";
import Navbar from "./components/navbar";
import Navbar1 from "./components/navbar-login";
import Navbar2 from "./components/navbar-admin";
import Register from "./pages/registerpage";
import Profile from "./pages/profilepage";

import NotFoundPage from "./pages/NotFoundPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Navbar />
      <Navbar1 /> */}
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
