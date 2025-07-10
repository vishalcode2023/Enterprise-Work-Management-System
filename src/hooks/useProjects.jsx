// src/hooks/useProjects.js
import { useState, useEffect } from "react";

const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(stored);
  }, []);

  const addProject = (newProj) => {
    const updated = [...projects, { ...newProj, id: Date.now() }];
    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));
  };

  return { projects, addProject };
};

export default useProjects;
