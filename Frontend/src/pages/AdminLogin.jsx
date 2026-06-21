import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import axios from "axios"

function AdminLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });



  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      setLoading(true);
     const response =await axios
     .post("http://localhost:8000/api/v1/admin/login",
      formData,
     {
      withCredentials: true,
     }
    );

    //  console.log(response.data);

     if(response.data.success){

      dispatch(
          login(response.data.admin)
      );
              
      navigate("/dashboard")
     }

    }catch(error){
        console.log(error.response?.data)
    }     finally {
    setLoading(false);
  }

   
  };

  return (
<div className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100 px-4">

  <div className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 border border-slate-200">

    <div className="text-center mb-8">

      <h1 className="text-3xl font-extrabold text-slate-800">
        Admin Login
      </h1>

      <p className="text-slate-500 mt-2">
        Sign in to access the recruitment dashboard
      </p>

    </div>

    <form onSubmit={handleSubmit} className="space-y-5">

      <div>
        <label className="block mb-2 font-medium text-slate-700">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          placeholder="admin@example.com"
          value={formData.email}
          onChange={handleChange}
          className="
          w-full
          border
          border-slate-300
          rounded-xl
          p-3
          outline-none
          transition
          focus:ring-4
          focus:ring-sky-200
          focus:border-sky-500
          "
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium text-slate-700">
          Password
        </label>

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="
          w-full
          border
          border-slate-300
          rounded-xl
          p-3
          outline-none
          transition
          focus:ring-4
          focus:ring-sky-200
          focus:border-sky-500
          "
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="
        w-full
        bg-gradient-to-r
        from-sky-500
        via-blue-600
        to-indigo-700
        text-white
        py-3
        rounded-xl
        font-bold
        shadow-lg
        hover:shadow-xl
        hover:-translate-y-1
        transition
        duration-300
        disabled:opacity-70
        disabled:cursor-not-allowed
        "
      >
        {loading ? "Signing In..." : "🔐 Login"}
      </button>

    </form>

  </div>

</div>
  );
}

export default AdminLogin;