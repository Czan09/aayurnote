import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/card.css";
import axios from "axios";
const TagCard = ({ card }) => {
  const [id, setId] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    setTag(card.tag_name);
    setId(card.id);
  }, [card]);

  const deleteTag = async () => {
    console.log(id);
    try {
      const deleteTag = await axios.delete("/api/tags/" + id);
      console.log(deleteTag);
      window.location.reload(false);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(card);

  return (
    <>
      <div className="card">
        <table>
          <tr>
            <th className="colmn1">
              <Link className="cardLink" to={"/tag/" + id}>
                <div>
                  <span className="">{tag}</span>
                </div>
              </Link>
            </th>

            <th className="colmn2">
              <div>
                <span>
                  <button className="button2" onClick={deleteTag}>
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

export default TagCard;
