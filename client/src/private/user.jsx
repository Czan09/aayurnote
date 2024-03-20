import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage";
import Profile from "../pages/profilepage";
import NotePage from "../pages/NotePage";
import NewNote from "../pages/NewNote";
import NoteDetail from "../pages/NoteDetail";
import TagPage from "../pages/TagPage";
import NotFoundPage from "../pages/NotFoundPage";

function User() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/notes" element={<NotePage />} />
        <Route path="/notes/new" element={<NewNote />} />
        <Route path="/note/:id" element={<NoteDetail />} />
        <Route path="/tag" element={<TagPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default User;
