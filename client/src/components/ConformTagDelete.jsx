import { useState } from "react";
import axios from "axios";

function ConfirmTagDelete(id) {
  const [error, setError] = useState("");
  const deleteTag = async () => {
    console.log(id);
    try {
      setError("");
      const deleteTag = await axios.delete("/api/tags/" + id.id);

      window.location.reload();
    } catch (e) {
      setError("Tag is in use Cannot be deleted");
      console.log(e);
    }
  };
  const No = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="move">
        <div className="form">
          <div className="delete">
            <p>Are You Sure?</p>
            <span className="center error">{error}</span>
            <div>
              <button onClick={deleteTag}>YES</button>
              <br />
              <br />

              <button onClick={No}>NO</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmTagDelete;
