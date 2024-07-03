import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/card.css";
import { Modal } from "@mui/material";
import ConformNoteDelete from "./ConformNoteDelete";

const Card = ({ card, filter, search }) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [tag, setTag] = useState("");
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    setTitle(card.title);
    setContent(card.content);
    if (card.tag_name !== "no-tag") {
      setTag(card.tag_name);
    }
    setId(card.note_id);
    setColor(card.color);
    const str = card.created_at;
    const result = str.split("T")[0];
    setDate(result);
  }, [card]);

  const addTag = () => {
    navigate("/notes/tag/" + id);
  };

  const handleDelete = async () => {
    try {
      setIsDelete(true);
    } catch (err) {
      console.error("Failed to delete item: ", err);
    }
  };

  const truncateContent = (content) => {
    const maxWords = 10;
    const words = content.split(/\s+/);
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "   .....see more";
    }
    return content;
  };

  const renderContent = () => {
    if (filter == 0 && search == "") {
      return renderCard();
    }

    if (
      filter == card.tag ||
      (filter == 0 && title.toLowerCase().includes(search.toLowerCase()))
    ) {
      return renderCard();
    }

    return null;
  };

  const renderCard = () => (
    <div className="card" key={id}>
      <table>
        <tr>
          <th className="colmn1">
            <Link className="cardLink" to={"/note/" + id}>
              <div>
                <div
                  className="colorBox"
                  style={{
                    backgroundColor: color,
                    width: "100%",
                    height: "20px",
                  }}
                ></div>
                <h3>{title}</h3>
                <span>{tag}</span>
                <div>{truncateContent(content)}</div>
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
                <button className="button2" onClick={handleDelete}>
                  Delete
                </button>
              </span>
              <Modal open={isDelete} onClose={handleDelete}>
                <div>
                  <ConformNoteDelete
                    id={id}
                    onClose={() => setIsDelete(false)}
                  />
                </div>
              </Modal>
              <span>{date}</span>
            </div>
          </th>
        </tr>
      </table>
    </div>
  );

  return renderContent();
};

export default Card;
