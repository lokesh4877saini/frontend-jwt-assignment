import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;
import "../css/Register.css";
const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "User",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post(
                `${BACKEND_URI}api/auth/register`,
            formData
        );

        alert("Registration Successful");
        navigate("/login");
        console.log(res.data);
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Register</h2>

                <label>Full Name</label>
                <input
                    type="text"
                    name="fullname"
                    placeholder="Enter Full Name"
                    value={formData.fullname}
                    onChange={handleChange}
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <label>Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />

                <label>Role</label>
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>

                <button type="submit">Register</button>
                <br/>
                <hr/>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
            
        </div>
    );
};

export default Register;