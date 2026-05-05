import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="navbar" style={{ justifyContent: "flex-end" }}>
            <div className="navLinks">
                <button onClick={() => navigate("/profile")}>My Account</button>
            </div>
        </div>
    );
}

export default Navbar;