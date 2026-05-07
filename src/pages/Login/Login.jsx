import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login Function
  const handleLogin = (e) => {

    e.preventDefault();

    // Simple Validation
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Save user
    localStorage.setItem(
      "user",
      JSON.stringify({ email })
    );

    // Go to Events Page
    navigate("/");
  };

  return (
    <div className="login-page">

      <form
        className="login-box"
        onSubmit={handleLogin}
      >

        <h1>CampusConnect</h1>

        <p>Login to continue</p>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        {/* Button */}
        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;