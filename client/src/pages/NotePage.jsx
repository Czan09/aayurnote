import axios from "axios";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import "../css/notepage.css";
import { Link } from "react-router-dom";
import Card from "../components/card";

const NotePage = () => {
  const cookie = new Cookies();
  const [userId, setUserId] = useState(null);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const verifyUser = async () => {
      const token = cookie.get("token");
      if (token) {
        try {
          const response = await axios.post("/api/user/verifyToken", {
            token: token,
          });
          setUserId(response.data.userId);
        } catch (error) {
          console.error("Error verifying token:", error);
        }
      }
    };

    verifyUser();
  }, [cookie]);

  useEffect(() => {
    const fetchNotes = async () => {
      if (!userId) return;
      try {
        const response = await axios.post("/api/notes/user", { id: userId });
        setNotes(response.data);
      } catch (err) {
        console.log("Error fetching notes:", err);
      }
    };

    fetchNotes();
  }, [userId]);
  console.log(notes);

  return (
    <>
      <div>
        <Link to={"new"}>
          <button className="new">NEW NOTE</button>
        </Link>

        <div>
          {notes.length > 0 ? ( // Check if notes array has elements
            notes.map((note) => <Card key={note.id} card={note} />)
          ) : (
            <div className="back">
              <h3 className="No-data">NO NOTES FOUND</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NotePage;
