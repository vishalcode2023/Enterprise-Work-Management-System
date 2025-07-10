import React, { useEffect, useState } from 'react';
import { useAuth } from '../Auth/AuthContext';
import { Trash2, Edit2, Menu, X, LogOut, Save } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link, useNavigate } from 'react-router-dom';

const COLORS = ['#4F46E5', '#6366F1', '#A5B4FC'];

const AdminDashBoard  = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [statusReport, setStatusReport] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [editProjectId, setEditProjectId] = useState(null);
  const [editedProject, setEditedProject] = useState({ title: '', description: '', status: '' });

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem('users')) || [];
    const activityLog = JSON.parse(localStorage.getItem('activityLog')) || [];
    const projectData = JSON.parse(localStorage.getItem('projects')) || [];

    const enrichedUsers = allUsers.map((u) => {
      const lastActivity = activityLog
        .filter((log) => log.email === u.email)
        .sort((a, b) => b.timestamp - a.timestamp)[0];

      return {
        ...u,
        status: lastActivity ? '🟢 Active' : '⚪ Inactive',
        lastActivity: lastActivity ? new Date(lastActivity.timestamp).toLocaleString() : 'Never',
      };
    });

    const statusMap = projectData.reduce((acc, curr) => {
      const key = curr.status || 'Unknown';
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    const chartData = Object.entries(statusMap).map(([status, count]) => ({
      name: status,
      value: count,
    }));

    setUsers(enrichedUsers);
    setProjects(projectData);
    setStatusReport(chartData);
  }, []);

  const handleDeleteProject = (id) => {
    const updated = projects.filter(p => p.id !== id);
    setProjects(updated);
    localStorage.setItem('projects', JSON.stringify(updated));
  };

  const handleEditProject = (project) => {
    setEditProjectId(project.id);
    setEditedProject({ title: project.title, description: project.description, status: project.status });
  };

  const handleSaveProject = (id) => {
    const updated = projects.map(p =>
      p.id === id ? { ...p, ...editedProject } : p
    );
    setProjects(updated);
    localStorage.setItem('projects', JSON.stringify(updated));
    setEditProjectId(null);
  };

  if (user?.role !== 'Admin') {
    return <div className="p-6 text-center text-red-600 font-bold">Access Denied: Admins Only</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className={`bg-white fixed md:static z-40 top-0 left-0 h-screen w-64 shadow-xl transform md:translate-x-0 transition-transform duration-300 flex flex-col justify-between ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}>
        <div>
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold text-indigo-600">Admin Panel</h2>
            <button className="md:hidden" onClick={() => setShowSidebar(false)}>
              <X />
            </button>
          </div>
          <nav className="px-6 py-4 space-y-4 text-gray-700 font-medium">
            <Link to="/admin-dashboard" className="block hover:text-indigo-600">🏠 Dashboard</Link>
            <Link to="/projects" className="block hover:text-indigo-600">📁 Projects</Link>
            <Link to="/kanban" className="block hover:text-indigo-600">🗂️ Kanban</Link>
            <Link to="/tasks" className="block hover:text-indigo-600">📝 Tasks</Link>
          </nav>
        </div>
        <div className="px-6 py-4 border-t">
          <button
            onClick={logout}
            className="w-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center gap-2 py-2 rounded-md font-semibold transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <div className="md:hidden flex items-center justify-between p-4 bg-white shadow sticky top-0 z-30">
          <h2 className="text-xl font-bold">Admin Dashboard</h2>
          <button onClick={() => setShowSidebar(true)}>
            <Menu />
          </button>
        </div>

        <main className="p-6 max-w-7xl mx-auto space-y-10">
          <h2 className="text-3xl font-extrabold text-indigo-700">👑 Welcome Admin</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-xl border border-indigo-100">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700 border-b pb-2">👥 User Management</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm border border-gray-200 rounded-lg">
                  <thead className="bg-indigo-50 text-indigo-800">
                    <tr>
                      <th className="px-4 py-2 border">📧 Email</th>
                      <th className="px-4 py-2 border">🧑‍💼 Role</th>
                      <th className="px-4 py-2 border">🔄 Status</th>
                      <th className="px-4 py-2 border">🕒 Last Activity</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {users.map((u, index) => (
                      <tr key={index} className="hover:bg-indigo-50">
                        <td className="px-4 py-2 border">{u.email}</td>
                        <td className="px-4 py-2 border font-medium">{u.role}</td>
                        <td className="px-4 py-2 border">{u.status}</td>
                        <td className="px-4 py-2 border">{u.lastActivity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-xl border border-indigo-100">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700 border-b pb-2">📊 Project Status Report</h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={statusReport} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
                      {statusReport.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-xl border border-indigo-100">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-700 border-b pb-2">📁 Project List</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-gradient-to-tr from-indigo-50 to-white p-5 rounded-xl shadow hover:shadow-md transition border border-indigo-100 relative">
                  {editProjectId === project.id ? (
                    <div>
                      <input
                        value={editedProject.title}
                        onChange={(e) => setEditedProject({ ...editedProject, title: e.target.value })}
                        className="w-full mb-2 border p-2 rounded"
                      />
                      <textarea
                        value={editedProject.description}
                        onChange={(e) => setEditedProject({ ...editedProject, description: e.target.value })}
                        className="w-full mb-2 border p-2 rounded"
                      ></textarea>
                      <input
                        value={editedProject.status}
                        onChange={(e) => setEditedProject({ ...editedProject, status: e.target.value })}
                        className="w-full mb-2 border p-2 rounded"
                      />
                      <button
                        onClick={() => handleSaveProject(project.id)}
                        className="mt-2 bg-green-500 text-white px-3 py-1 rounded flex items-center gap-1"
                      >
                        <Save size={16} /> Save
                      </button>
                    </div>
                  ) : (
                    <>
                      <h4 className="text-lg font-bold text-indigo-800 mb-1 truncate">{project.title}</h4>
                      <p className="text-sm text-gray-700 mb-2 line-clamp-3">{project.description || 'No description'}</p>
                      <p className="text-xs text-indigo-600 font-medium mb-4">📌 Status: {project.status}</p>
                    </>
                  )}
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button
                      onClick={() => handleEditProject(project)}
                      className="text-blue-500 hover:text-blue-700"
                      title="Edit project"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete project"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashBoard;