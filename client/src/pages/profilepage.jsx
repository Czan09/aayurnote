import { useState, useEffect } from "react";
import axios from "axios";
import "../css/profile.css";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = 6;
        const response = await axios.get("/api/user/detail/" + id);
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      {user ? (
        <>
          <div className="centerme">
            <strong>Username:</strong> {user[0].username}
          </div>
          <div className="centerme">
            <strong>Email:</strong> {user[0].email}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
