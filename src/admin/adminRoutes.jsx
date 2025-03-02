// src/admin/routes/AdminRoutes.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AdminPackageDetails from './Pages/PackageDetails/PackageDetails';
import LoginRegisterPage from './Pages/auth/LoginRegisterPage';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import Login from './Pages/auth/Components/Login';
import Register from './Pages/auth/Components/Register';
import Navbar from './Components/navbar/Navbar';

// Helper function to check if a cookie token exists
const isAuthenticated = () => {
  console.log(document,"cookie")
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('token='));
  return !!token;
};

// PrivateRoute wrapper for admin authentication
const PrivateRoute = ({ element: Component }) => {
  return isAuthenticated() ? <Component /> : <Navigate to="/admin/login" replace />;
};

const AdminRoutes = () => {
  return (
    <>
    {/* Render the Header component only for authenticated pages */}
    {isAuthenticated() && <Navbar />}

    <Routes>
      <Route path="/" element={<PrivateRoute element={AdminDashboard} />} />
      <Route path="/package_details/:package_id" element={<PrivateRoute element={AdminPackageDetails} />} />
      <Route path="/login_register" element={<LoginRegisterPage />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
  );
};

export default AdminRoutes;
