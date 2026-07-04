import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;
import "../css/dashboard.css";
const Dashboard = () => {
    const { token, user } = useAuth();

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(
                    `${BACKEND_URI}api/userData/user/${user._id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setUserData(res.data.data);
            } catch (err) {
                console.log(err);
            }
        };

        if (user) {
            getUser();
        }
    }, [user, token]);

    return (
        <div className="dashboard-container">
            <div className="dashboard-card">
                <h2>User Dashboard</h2>

                {userData ? (
                    <>
                        <p>
                            <strong>Name:</strong> {userData.fullname}
                        </p>

                        <p>
                            <strong>Email:</strong> {userData.email}
                        </p>

                        <p>
                            <strong>Role:</strong> {userData.role}
                        </p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;