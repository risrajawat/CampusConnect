import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./layout.css";

// Layout wraps every page that needs the sidebar
// The <Outlet /> renders whatever page is currently active
function Layout() {
  return (
    <div className="page-wrapper">
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
