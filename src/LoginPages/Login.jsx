import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import toast from "react-hot-toast";
import TopNavbar from "../Routers/TopNavbar";
import Footer from "../Components/Footer";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "Employee", // For UI only (optional selection)
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = login(form.email, form.password);
    if (result) {
      toast.success(`Logged in as ${result.role}`);
      if (result.role.toLowerCase() === "admin") {
        navigate("/admin-dashboard");
      }else if(result.role.toLowerCase() === "manager") {
        navigate("/ManagerDashBoard")
      }else {
        navigate("/dashboard");
      }
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div>
      <TopNavbar />
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 px-6">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Welcome Back to <span className="text-indigo-600">TaskFlow</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-md mx-auto md:mx-0">
            Log in to access your workspace, manage tasks, and collaborate
            effortlessly with your team.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✅ Personalized dashboards based on your role</li>
            <li>✅ Secure access to your team’s resources</li>
            <li>✅ Real-time project tracking and updates</li>
          </ul>
        </div>

        {/* Login Form */}
        <div className="md:w-1/2 max-w-md bg-white p-8 rounded-xl shadow-xl w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Log in to Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Role Dropdown for UI visibility only */}
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Employee">Employee</option>
            </select>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Log In
            </button>
          </form>

          <p className="text-xs text-center text-gray-500 mt-4">
            New to TaskFlow?{" "}
            <a href="/signup" className="underline text-indigo-600">
              Create an account
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
