import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../css/resister.css";

function Register() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postData = {
    username: username,
    email: email,
    password: password,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post("/api/user", postData)
        .then((response) => {
          console.log("Respo+nse:", response.data);
        });
      navigate("/login");
      console.log(username);
      console.log(email);
      console.log(password);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="shrijan">Register</button>
      </form>
    </div>
  );
}

export default Register;
