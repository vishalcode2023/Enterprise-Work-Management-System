import React, { useEffect, useState } from "react";
import TaskList from "../TaskPages/TaskList"; // adjust if needed
import { Link } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import {
  LayoutDashboard,
  Folder,
  FolderKanban,
  ClipboardList,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const TaskPage = () => {
  const { user, logout } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(stored);
  }, []);

  const updateTaskStatus = (taskId, newStatus) => {
    const updated = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`bg-white fixed md:static z-40 top-0 left-0 h-screen w-64 shadow-xl transform md:translate-x-0 transition-transform duration-300 flex flex-col justify-between ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-between items-center p-6 border-b">
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
              <Link to="/tasks" className="flex items-center gap-2 text-indigo-600 font-bold">
                <ClipboardList size={18} /> Tasks
              </Link>
            </nav>
          </div>
        </div>

        {/* Logout Button */}
        <div className="p-6 border-t">
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
        {/* Mobile Nav */}
        <div className="md:hidden flex items-center justify-between p-4 bg-white shadow sticky top-0 z-30">
          <h2 className="text-xl font-bold">Task Management</h2>
          <button onClick={() => setShowSidebar(true)}>
            <Menu />
          </button>
        </div>

        <main className="flex-1 p-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 Task List</h2>
          <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} />
        </main>
      </div>
    </div>
  );
};

export default TaskPage;
