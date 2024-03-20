import { Link } from "react-router-dom";
const TagPage = () => {
  return (
    <>
      <div>
        <Link to={"new"}>
          <button className="new">NEW TAG</button>
        </Link>
      </div>
      tags
    </>
  );
};

export default TagPage;
