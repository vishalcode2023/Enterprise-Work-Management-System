import React, { useState, useEffect } from "react";
import { BadgeCheck, Clock, Loader2 } from "lucide-react";

const TaskList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(storedProjects);
  }, []);

  const updateProjectStatus = (id, status) => {
    const updatedProjects = projects.map((proj) =>
      proj.id === id ? { ...proj, status } : proj
    );
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return (
          <span className="inline-flex items-center gap-1 text-green-600 bg-green-100 px-2 py-0.5 rounded-full text-xs font-medium">
            <BadgeCheck size={14} /> Completed
          </span>
        );
      case "In Progress":
        return (
          <span className="inline-flex items-center gap-1 text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-full text-xs font-medium">
            <Loader2 size={14} className="animate-spin" /> In Progress
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full text-xs font-medium">
            <Clock size={14} /> Pending
          </span>
        );
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
      {projects.map((proj) => (
        <div
          key={proj.id}
          className="bg-white p-5 rounded-lg shadow hover:shadow-md transition-all border border-gray-100"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800">
              {proj.title}
            </h3>
            {getStatusBadge(proj.status || "Pending")}
          </div>
          <p className="text-sm text-gray-600 mb-4">{proj.description}</p>

          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">
              Status:
            </label>
            <select
              value={proj.status || "Pending"}
              onChange={(e) => updateProjectStatus(proj.id, e.target.value)}
              className="border-gray-300 text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 px-2 py-1"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
