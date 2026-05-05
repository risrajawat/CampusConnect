import Sidebar from "../Sidebar/Sidebar";
import "./layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">{children}</div>
    </div>
  );
}

export default Layout;