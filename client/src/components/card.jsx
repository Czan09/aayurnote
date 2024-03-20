import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const card  ({ card }) => {

    const [id, setid] = useState('');
    const [name, setName] = useState('');
    const [detail, setDetail] = useState('');
    const [tag, setTag] = useState('');
    
    
    

  return (
    <Link to={ + id}>
      <div className="card">
        <div className="">
        </div>
        <h3 className="">{name}</h3>
        <span className="">{}</span>
        <div className="">
          <span className="">{}</span>
        </div>
      </div>
    </Link>
  );
};

export default card;
