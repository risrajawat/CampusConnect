import { NavLink, useNavigate } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Sidebar Links Data
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "📊",
    },
    {
      name: "Events",
      path: "/",
      icon: "📅",
    },
    {
      name: "My Interests",
      path: "/saved",
      icon: "❤️",
    },
    {
      name: "Opportunities",
      path: "/opportunities",
      icon: "🚀",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "👤",
    },
  ];

  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo">
        <h2>CampusConnect</h2>
      </div>

      {/* Navigation */}
      <div className="menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            <span className="icon">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      {/* Logout */}
      <button className="logout-btn" onClick={handleLogout}>
        <span className="icon">🚪</span>
        Logout
      </button>
    </div>
  );
}

export default Sidebar;