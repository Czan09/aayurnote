import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/card.css";
import axios from "axios";
const Card = ({ card }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    setTitle(card.title);
    setContent(card.content);
    setTag(card.tag_name);
    setId(card.note_id);
  }, [card]);

  const addTag = () => {
    console.log(id);
  };
  const DeleteNote = async () => {
    console.log(id);
    try {
      const deleteNote = await axios.delete("/api/notes/" + id);
      console.log(deleteNote);
      window.location.reload(false);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(card);

  return (
    <>
      {/* {console.log(id)} */}
      <div className="card">
        <table>
          <tr>
            <th className="colmn1">
              <Link className="cardLink" to={"/note/" + id}>
                <div>
                  <div className=""></div>
                  <h3 className="">{title}</h3>
                  <span className="">{tag}</span>
                  <div className="">{content}</div>
                </div>
              </Link>
            </th>

            <th className="colmn2">
              <div>
                <span>
                  <button className="button1" onClick={addTag}>
                    CHANGE TAG
                  </button>
                </span>
                <span>
                  <button className="button2" onClick={DeleteNote}>
                    DELETE
                  </button>
                </span>
              </div>
            </th>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Card;
