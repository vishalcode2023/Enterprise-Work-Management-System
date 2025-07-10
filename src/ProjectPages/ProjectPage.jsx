import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProjectForm from "../Project/ProjectForm";
import ProjectList from "../Project/ProjectList";
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

const ProjectPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(stored);
  }, []);

  const handleAddProject = (newProj) => {
    const updated = [...projects, { ...newProj, id: Date.now() }];
    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));
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
              <Link
                to="/dashboard"
                className="flex items-center gap-2 hover:text-indigo-600 transition"
              >
                <LayoutDashboard size={18} /> Dashboard
              </Link>
              <Link
                to="/projects"
                className="flex items-center gap-2 text-indigo-600 font-bold"
              >
                <Folder size={18} /> Projects
              </Link>
              <Link
                to="/kanban"
                className="flex items-center gap-2 hover:text-indigo-600 transition"
              >
                <FolderKanban size={18} /> Kanban Board
              </Link>
              <Link
                to="/tasks"
                className="flex items-center gap-2 hover:text-indigo-600 transition"
              >
                <ClipboardList size={18} /> Tasks
              </Link>
            </nav>
          </div>
        </div>

        {/* Logout at Bottom */}
        <div className="p-6 border-t">
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="w-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center gap-2 py-2 rounded-md font-semibold transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Mobile Top Nav */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow w-full sticky top-0 z-30">
        <h2 className="text-xl font-bold">Project Management</h2>
        <button onClick={() => setShowSidebar(true)}>
          <Menu />
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">📁 Manage Projects
        </h2>
        <ProjectForm onSubmit={handleAddProject} />
        <ProjectList projects={projects} />
      </main>
    </div>
  );
};

export default ProjectPage;
