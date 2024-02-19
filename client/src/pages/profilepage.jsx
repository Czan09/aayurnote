import { useState, useEffect } from "react";
import axios from "axios";
import "../css/profile.css";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/user/detail/5");
        console.log(response.data); // Log the response data
        setUser(response.data); // Set the user state with the fetched data
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
            <strong>Username:</strong> {user.username}
          </div>
          <div className="centerme">
            <strong>Email:</strong> {user.email}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
