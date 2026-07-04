import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "../css/AdminDashboard.css";

const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;

const AdminDashboard = () => {
    const { token } = useAuth();
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const res = await axios.get(
                `${BACKEND_URI}/userData/users`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setUsers(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(
                `${BACKEND_URI}/userData/users/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            getUsers();
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="admin-container">
            <h2>Admin Dashboard</h2>

            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.fullname}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button
                                    onClick={() => deleteUser(user._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;