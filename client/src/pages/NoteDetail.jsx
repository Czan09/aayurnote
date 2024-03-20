import { useState, useEffect } from "react";
import "../css/notepage.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { useParams } from "react-router-dom";

const NoteDetail = () => {
  const { id } = useParams();
  // console.log(id);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagId, setTagId] = useState();
  const [tagName, setTagName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getNote = async () => {
      try {
        const response = await axios.get("/api/notes/" + id);
        console.log(response.data);
        setTitle(response.data.title);
        setContent(response.data.content);
        if (response.data.tag === 1) {
          setTagName("");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getNote();
  }, [id]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (!title || !content) {
      setError("Fill Up everything");
      return;
    }
    const editNote = await axios.put("/api/notes/" + id, {
      title: title,
      content: content,
    });
    console.log(editNote);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <span className="error">
          {error && <p className="error">{error}</p>}
        </span>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
        <br />
        <label htmlFor="tag">Tag:</label>
        {tagName}
        <label htmlFor="content">Content</label>
        <textarea
          className="content"
          id="content"
          value={content}
          onChange={handleContentChange}
        />
        <button className="save" type="submit">
          SAVE
        </button>
      </form>
    </>
  );
};
export default NoteDetail;
