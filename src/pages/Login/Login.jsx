import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState(null);

  // Login Function
  const handleLogin = (e) => {

    e.preventDefault();

    // Simple Validation
    if (!email || !password || !userType) {
      alert("Please fill all fields and select user type");
      return;
    }

    // Save user
    localStorage.setItem(
      "user",
      JSON.stringify({ email, userType })
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

        {/* User Type Question */}
        <div className="user-type-question">
          <p>Are you a student or faculty?</p>
          <div className="button-group">
            <button
              type="button"
              className={`type-btn ${userType === 'student' ? 'active' : ''}`}
              onClick={() => setUserType('student')}
            >
              Student
            </button>
            <button
              type="button"
              className={`type-btn ${userType === 'faculty' ? 'active' : ''}`}
              onClick={() => setUserType('faculty')}
            >
              Faculty
            </button>
          </div>
        </div>

        {/* Button */}
        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;