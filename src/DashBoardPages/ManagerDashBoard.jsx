import React, { useEffect, useState } from "react";
import {
  FolderKanban,
  Users,
  ClipboardList,
  LayoutDashboard,
  Settings,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import toast from 'react-hot-toast';


const ManagerDashBoard = () => {
  const { user, logout } = useAuth();
  const [projects, setProjects] = useState([]);
  const [taskForm, setTaskForm] = useState({ title: "", description: "", assignedTo: "" }); // 🔥
  const [tasks, setTasks] = useState([]); // 🔥

  useEffect(() => {
    const projectData = JSON.parse(localStorage.getItem("projects")) || [];
    const taskData = JSON.parse(localStorage.getItem("tasks")) || [];
    setProjects(projectData);
    setTasks(taskData);
  }, []);

  const handleTaskChange = (e) => {
    setTaskForm({ ...taskForm, [e.target.name]: e.target.value });
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      ...taskForm,
      assignedBy: user?.email,
      status: "Pending",
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTaskForm({ title: "", description: "", assignedTo: "" });
    toast.success("✅ Task assigned!");
  };

  const projectStatusData = projects.reduce((acc, project) => {
    const status = project.status || "Active";
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(projectStatusData).map((status) => ({
    status,
    count: projectStatusData[status],
  }));

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl h-screen flex flex-col justify-between p-6">
        <div>
          <h2 className="text-2xl font-bold text-indigo-600 mb-8">Manager Panel</h2>
          <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
            <Link to="/ManagerDashBoard" className="flex items-center gap-2 hover:text-indigo-600">
              <LayoutDashboard size={18} /> Dashboard
            </Link>
            <Link to="/projects" className="flex items-center gap-2 hover:text-indigo-600">
              <FolderKanban size={18} /> Manage Projects
            </Link>
            <Link to="/team" className="flex items-center gap-2 hover:text-indigo-600">
              <Users size={18} /> Team Overview
            </Link>
            <Link to="/setting" className="flex items-center gap-2 hover:text-indigo-600">
              <Settings size={18} /> Settings
            </Link>
          </nav>
        </div>

        <div>
          <button
            onClick={logout}
            className="w-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center gap-2 py-2 rounded-md font-semibold transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          👋 Hello, <span className="text-indigo-600">{user?.email}</span>
        </h1>

        {/* 📌 Assign Task Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">📌 Assign Task</h2>
          <form
            onSubmit={handleTaskSubmit}
            className="space-y-4 bg-white p-6 rounded-lg shadow border max-w-xl"
          >
            <input
              type="text"
              name="title"
              value={taskForm.title}
              onChange={handleTaskChange}
              placeholder="Task Title"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            />
            <textarea
              name="description"
              value={taskForm.description}
              onChange={handleTaskChange}
              placeholder="Task Description"
              rows={3}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            />
            <input
              type="email"
              name="assignedTo"
              value={taskForm.assignedTo}
              onChange={handleTaskChange}
              placeholder="Assign to (Employee Email)"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-md"
            >
              Assign Task
            </button>
          </form>
        </section>

        {/* Project Chart */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">📊 Project Overview</h2>
          <div className="bg-white p-6 rounded-lg shadow border">
            {chartData.length === 0 ? (
              <p className="text-gray-500">No project data available for charts.</p>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="status" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#6366F1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </section>

        {/* Active Projects */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">📁 Active Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.length === 0 ? (
              <p className="text-gray-500">No projects found.</p>
            ) : (
              projects.map((project, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow border">
                  <div className="flex justify-between items-center">
                    <h3 className="text-indigo-700 font-bold">{project.title}</h3>
                    <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                      {project.status || "Active"}
                    </span>
                  </div>
                  <p className="text-sm mt-2 text-gray-600">
                    {project.description || "No description provided."}
                  </p>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Team Overview Placeholder */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">👥 Team Overview</h2>
          <div className="bg-white p-4 rounded-lg shadow border">
            <p className="text-gray-600">Team management functionality coming soon...</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ManagerDashBoard;
