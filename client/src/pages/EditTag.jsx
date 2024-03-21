import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/notepage.css";
import axios from "axios";

function EditTag() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [tag, setTag] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(id);
        const response = await axios.get("/api/tags/" + id);
        // console.log(response);
        if (response.data.length === 0) {
          // console.log("error");
          navigate("/*");
        }
        setTag(response.data.tag_name);
      } catch (error) {
        console.error("Error fetching tag:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleTagNameChange = (event) => {
    setTag(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (!tag) {
      setError("Fill Up everything");
      return;
    }
    try {
      const editTag = await axios.put("/api/tags/" + id, {
        tag_name: tag,
      });
      console.log(editTag);
      navigate("/tag");
    } catch (error) {
      console.error("Error editing tag:", error);
    }
  };

  return (
    <>
      <form className="form2" onSubmit={handleSubmit}>
        <span className="error">
          {error && <p className="error">{error}</p>}
        </span>
        <label htmlFor="tag">Tag Name</label>
        <input
          type="text"
          id="tag"
          value={tag}
          onChange={handleTagNameChange}
        />
        <br />
        <br />
        <button className="save" type="submit">
          SAVE
        </button>
      </form>
    </>
  );
}

export default EditTag;
