import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/card.css";
import { Modal } from "@mui/material";
import ConfirmTagDelete from "./ConformTagDelete";
const TagCard = ({ card }) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [color, setColor] = useState();
  const [tag, setTag] = useState("");
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    setTag(card.tag_name);
    setId(card.id);
    setColor(card.color);
  }, [card]);

  const editTag = () => {
    console.log(id);
    navigate("/tag/" + id);
  };

  function handleDelete() {
    setIsDelete(true);
  }

  console.log(card);

  return (
    <>
      <div className="card">
        <table>
          <tr>
            <th className="colmn1">
              <div>
                <div
                  className="colorBox"
                  style={{
                    backgroundColor: color,
                    width: "50%",
                    height: "20px",
                  }}
                ></div>
                <span className="">{tag}</span>
              </div>
            </th>

            <th className="colmn2">
              <div>
                <span>
                  <button className="button2" onClick={handleDelete}>
                    DELETE
                  </button>
                </span>
                <Modal open={isDelete} onClose={handleDelete}>
                  <div>
                    <ConfirmTagDelete
                      id={id}
                      onClose={() => setIsDelete(false)}
                    />
                  </div>
                </Modal>
                <span>
                  <button className="button1" onClick={editTag}>
                    Edit
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

export default TagCard;
