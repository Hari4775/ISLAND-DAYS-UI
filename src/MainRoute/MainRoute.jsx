import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import "../App.css"
import AdminRoutes from '../admin/adminRoutes'
import UserRoutes from '../User/UserRoutes'

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Routes */}
        <Route path="/*" element={<UserRoutes />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminRoutes/>} />
      </Routes>
    </BrowserRouter>
  );
};


export default MainRoute;
