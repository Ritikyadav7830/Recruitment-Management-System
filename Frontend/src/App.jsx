import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {login,logout} from "./redux/AuthSlice"
import axios from "axios";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./pages/Home";
import ApplyJob from "./pages/ApplyJob";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import CandidateDetails from "./pages/CandidateDetails"
import ProtectedRoute from "./route/ProtectedRoute"

function App() {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const checkAuth = async () => {

      try {

        const response = await axios.get(
          "http://localhost:8000/api/v1/admin/current-admin",
          {
            withCredentials: true,
          }
        );

        if (response.data.success) {

           dispatch(login(response.data.admin));

        }

      } catch (error) {
         dispatch(logout());
         console.log(error)

      } finally {

        setLoading(false);

      }
    };

    checkAuth();

  }, []);

    if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <BrowserRouter>
    <Routes>

      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/applyjob" element={<ApplyJob />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Route>

      {/* Admin Routes */}
      <Route
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/candidate/:id" element={<CandidateDetails />} />
      </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;