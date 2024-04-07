import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../components/card";
import Cookies from "universal-cookie";

const NotePage = () => {
  const [userId, setUserId] = useState(null);
  const [notes, setNotes] = useState([]);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState("");
  const cookie = new Cookies();

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
  }, []);

  useEffect(() => {
    const getTags = async () => {
      try {
        const response = await axios.post("/api/tags/user", {
          id: userId,
        });
        setTags(response.data);
      } catch (error) {
        console.error("Error getting tags:", error);
      }
    };

    if (userId) {
      getTags();
    }
  }, [userId]);

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

    if (userId) {
      fetchNotes();
    }
  }, [userId]);

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };

  // console.log(tag);

  return (
    <>
      <div>
        <div>
          <label htmlFor="search">Search Note</label>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>

        <label htmlFor="tag">Filter</label>
        <select id="tag" value={tag} onChange={handleTagChange}>
          <option value={0}>Select a tag</option>
          <option value={1}>no tag</option>
          {tags.map((tagItem) => (
            <option key={tagItem.id} value={tagItem.id}>
              {tagItem.tag_name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Link to={"new"}>
          <button className="new">NEW NOTE</button>
        </Link>

        <div>
          {notes.length > 0 ? (
            notes.map((note) => (
              <Card key={note.id} card={note} filter={tag} search={search} />
            ))
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
