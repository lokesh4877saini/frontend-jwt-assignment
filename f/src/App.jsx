import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./component/ProtectedRoute";
import Header from "./component/Header";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashbaord";
import AdminDashboard from "./pages/AdminDaord";
import Unauthorized from "./pages/Unauthorized";
import "./App.css";
function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Header />

                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/unauthorized" element={<Unauthorized />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute allowedRoles={["User", "Admin"]}>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute allowedRoles={["Admin"]}>
                                <AdminDashboard />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;