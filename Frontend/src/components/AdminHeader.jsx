import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { logout } from "../redux/AuthSlice";

function AdminHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  const admin = useSelector(
    (state) => state.auth.admin
  );

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/v1/admin/logout",
        {},
        {
          withCredentials: true,
        }
      );

      dispatch(logout());
      navigate("/adminlogin");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="bg-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto h-[70px] flex justify-between items-center px-6">

        {/* Logo */}
        <img
          src="Recruitment-Management-System-logo.jpg"
          alt="RMS Logo"
          className="h-12 w-auto rounded"
        />
    
        <div className="flex items-center gap-4">

            <span className="text-gray-300 text-sm">
              Welcome, Admin
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition duration-300 cursor-pointer"
            >
              Logout
            </button>

          </div>
      </div>
    </header>
  );
}

export default AdminHeader;


