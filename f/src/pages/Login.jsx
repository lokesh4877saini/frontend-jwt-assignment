import { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../css/login.css";
const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;
console.log("BACKEND_URI:", BACKEND_URI);
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password,
        };
        const res = await axios.post(
                `${BACKEND_URI}/api/auth/login`,
            data
        );
        console.log("Login response:", res.data);
        login(res.data.data.token, res.data.data.user);
        alert("Login Successful");
        if(res.data.data.user.role === "Admin"){
            navigate("/admin");
        }else{
            navigate("/dashboard");
        };
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>

                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
                <br/>
                <hr/>
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;