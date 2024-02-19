import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage";
import Profile from "../pages/profilepage";
import NotFoundPage from "../pages/NotFoundPage";

function User() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/notes" element={<NotFoundPage />} />
        <Route path="/tag" element={<NotFoundPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default User;
