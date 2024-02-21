import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/loginpage.css";
import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      if (email === "" || password === "") {
        console.log("email or Password empty");
        setError("email or Password empty");
        return;
      }
      const getUser = await axios.post("/api/user/email", { email: email });
      if (getUser.data.length === 0) {
        console.log("User Not Found");
        setError("Email or Password is incorrect");
      }
      if (
        email === getUser.data[0].email &&
        password === getUser.data[0].password
      ) {
        console.log("enter");
        setError("");
        navigate("/");
      } else {
        setError("Email or Password is incorrect");
        throw new Error("Email or Password is incorrect");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="center">
      <div className="login-container">
        <h2>Login Page</h2>
        <div className="form-group">
          <label htmlFor="email">email:</label>
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
        {error && <div className="error-message">{error}</div>}
        <button className="shrijan" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
