import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/card.css";
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

  console.log(card);

  return (
    <Link className="cardLink" to={"/note/" + id}>
      {console.log(id)}
      <div className="card">
        <div className=""></div>
        <h3 className="">{title}</h3>
        <span className="">{tag}</span>
        <div className="">{content}</div>
      </div>
    </Link>
  );
};

export default Card;
