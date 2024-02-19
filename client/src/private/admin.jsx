import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage";
import Profile from "../pages/profilepage";
import NotFoundPage from "../pages/NotFoundPage";

function Admin() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cuser" element={<NotFoundPage />} />
        <Route path="/luser" element={<NotFoundPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default Admin;
