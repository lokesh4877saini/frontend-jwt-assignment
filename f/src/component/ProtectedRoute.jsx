import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { token, user } = useAuth();
    console.log("token:", token);
    console.log("user:", user);
    if (!token) {
        return <Navigate to="/login" replace />
    }

    if (allowedRoles && !allowedRoles.includes(user?.role)) {
        return <Navigate to="/unauthorized" replace />
    }

    return children;
};

export default ProtectedRoute;