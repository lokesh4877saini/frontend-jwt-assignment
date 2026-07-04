import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../css/Header.css";

const Header = () => {
    const { token, user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    console.log("Header - token:", token);
    return (
        <header className="header">
            <h2>JWT Assignment</h2>

            <nav>
                {!token && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}

                {token && user?.role === "User" && (
                    <Link to="/dashboard">Dashboard</Link>
                )}

                {token && user?.role === "Admin" && (
                    <Link to="/admin">Admin Dashboard</Link>
                )}

                {token && (
                    <button onClick={handleLogout}>Logout</button>
                )}
            </nav>
        </header>
    );
};

export default Header;