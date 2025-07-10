import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import DashboardStats from "../DashComponents/DashBoardStarts";
import RecentActivityFeed from "../DashComponents/RecentActivityFeed";
import NotificationsPanel from "../DashComponents/NotificationsPanel";
import {
  Menu,
  X,
  LogOut,
  FolderKanban,
  Folder,
  LayoutDashboard,
  ClipboardList,
  Settings,
} from "lucide-react";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    setProjects(storedProjects);
    setTasks(storedTasks);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <aside
        className={`bg-white fixed md:static z-40 top-0 left-0 h-screen w-64 shadow-xl transform md:translate-x-0 transition-transform duration-300 flex flex-col justify-between ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-3xl font-extrabold text-indigo-600 tracking-tight">
              TaskFlow
            </h2>
            <button className="md:hidden" onClick={() => setShowSidebar(false)}>
              <X />
            </button>
          </div>

          <div className="px-6 py-4">
            <p className="text-sm mb-4 text-white bg-indigo-500 inline-block px-3 py-1 rounded-full font-medium shadow">
              👤 {user.role}
            </p>

            <nav className="space-y-4 mt-4 text-gray-700 font-medium">
              <Link to="/dashboard" className="flex items-center gap-2 hover:text-indigo-600 transition">
                <LayoutDashboard size={18} /> Dashboard
              </Link>
              <Link to="/projects" className="flex items-center gap-2 hover:text-indigo-600 transition">
                <Folder size={18} /> Projects
              </Link>
              <Link to="/kanban" className="flex items-center gap-2 hover:text-indigo-600 transition">
                <FolderKanban size={18} /> Kanban Board
              </Link>
              <Link to="/tasks" className="flex items-center gap-2 hover:text-indigo-600 transition">
                <ClipboardList size={18} /> Tasks
              </Link>
              <Link to="/Setting" className="flex items-center gap-2 hover:text-indigo-600 transition">
                <Settings size={18} /> Setting
              </Link>
            </nav>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <button
            onClick={logout}
            className="w-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center gap-2 py-2 rounded-md font-semibold transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="md:hidden flex justify-between items-center px-4 py-3 bg-white shadow sticky top-0 z-30">
          <h2 className="text-xl font-bold">TaskFlow Dashboard</h2>
          <button onClick={() => setShowSidebar(true)}>
            <Menu />
          </button>
        </div>

        <main className="flex-1 p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            👋 Welcome, <span className="text-indigo-600">{user.email}</span>
          </h2>

          <DashboardStats projects={projects} tasks={tasks} />

          {/* Projects */}
          <div className="bg-white mt-8 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-4">📁 Your Projects</h3>
            {projects.length === 0 ? (
              <p className="text-gray-500">No projects yet. Start by creating one.</p>
            ) : (
              <ul className="grid gap-4 md:grid-cols-2">
                {projects.map((project, index) => (
                  <li
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 transition shadow-sm"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-indigo-700">{project.title}</h4>
                      <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                        {project.status || "Active"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      {project.description || "No description provided."}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* 🔥 All Tasks */}
          <div className="bg-white mt-8 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🧾 All Tasks</h3>
            {tasks.length === 0 ? (
              <p className="text-gray-500">No tasks added yet.</p>
            ) : (
              <ul className="grid gap-4 md:grid-cols-2">
                {tasks.map((task, index) => (
                  <li
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 transition shadow-sm"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-indigo-700">{task.title}</h4>
                      <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                        {task.status || "Pending"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      {task.description || "No description provided."}
                    </p>
                    {task.assignedTo && (
                      <p className="text-xs text-gray-500 mt-1">👤 Assigned to: {task.assignedTo}</p>
                    )}
                    {task.assignedBy && (
                      <p className="text-xs text-gray-500">📌 Assigned by: {task.assignedBy}</p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Activity & Notifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <RecentActivityFeed />
            <NotificationsPanel />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
