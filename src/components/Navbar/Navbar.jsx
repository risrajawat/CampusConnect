import "./Navbar.css";

function Navbar() {

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const email = user.email || "";
  const name = email.split("@")[0] || "User";
  const displayName = name.charAt(0).toUpperCase() + name.slice(1);
  const initial = displayName.charAt(0);

  const role = user.userType === "faculty" ? "Faculty" : "Student";

  return (
    <div className="navbar">

      {/* Left Side */}
      <div className="navbar-text">
        <h2>CampusConnect</h2>
      </div>

      {/* Right Side */}
      <div className="navbar-user">
        <div className="profile">
          <div className="profile-image">
            {initial}
          </div>

          <div>
            <h4>{displayName}</h4>
            <p>{role}</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Navbar;