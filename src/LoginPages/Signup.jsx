import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import toast from "react-hot-toast"; // ✅ Import toast
import TopNavbar from "../Routers/TopNavbar";
import Footer from "../Components/Footer";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "Employee",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = signup(form.email, form.password, form.role);
    if (success) {
      toast.success("Account created successfully!"); // ✅ Toast on success
      navigate("/login");
    } else {
      toast.error("User already exists."); // ✅ Toast on error
    }
  };

  return (
    <div>
      <TopNavbar />
      <div className="min-h-screen py-5 flex flex-col md:flex-row items-center justify-center bg-gray-50 px-6">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Simplify Your <span className="text-indigo-600">Workflow</span>
            <br />
            with <span className="border-b-4 border-yellow-400">TaskFlow</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-md mx-auto md:mx-0">
            Empower your team to plan smarter, communicate better, and get more
            done — all in one seamless platform.
          </p>
        </div>

        {/* Signup Form */}
        <div className="md:w-1/2 max-w-md bg-white p-8 rounded-xl shadow-xl w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Create Your TaskFlow Account
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
              Sign Up
            </button>
          </form>

          <p className="text-xs text-center text-gray-500 mt-4">
            By signing up, you agree to our{" "}
            <a href="#" className="underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
