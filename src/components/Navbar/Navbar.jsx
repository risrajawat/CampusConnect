import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">

      {/* Left Side */}
      <div className="navbar-text">
        <h2>CampusConnect</h2>
      </div>

      {/* Right Side */}
      <div className="navbar-user">

        <div className="notification">
          🔔
        </div>

        <div className="profile">
          <div className="profile-image">
            R
          </div>

          <div>
            <h4>Rishabh</h4>
            <p>Student</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Navbar;