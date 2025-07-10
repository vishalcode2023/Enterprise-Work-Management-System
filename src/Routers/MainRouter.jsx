import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "../Components/LandingPage";
import Signup from "../LoginPages/Signup";
import Login from "../LoginPages/Login";
import Dashboard from "../DashBoardPages/DashBoard";
import AdminPage from "../Roles/AdminPage";
import ManagerPage from "../Roles/ManagerPage";
import EmployeePage from "../Roles/EmployeePage";
import ProtectedRoute from "../Auth/ProtectedRoute";
import ProjectPage from "../ProjectPages/ProjectPage";
import KanbanPage from "../TaskPages/KanbanPage";
import TaskPage from "../TaskPages/TaskPage";
import Admindashboard from "../DashBoardPages/Admindashboard"
import SettingsPage from "../Components/SettingsPage";
import ManagerDashBoard from "../DashBoardPages/ManagerDashBoard";
import Features from "../Components/Features";
import Solutions from "../Components/Solutions";
import ProductGuide from "../Components/ProductGuide";
import AdminDashBoard from "../DashBoardPages/Admindashboard";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
       <Route path="/features" element={<Features/>}/>
       <Route path='/solutions' element={<Solutions/>}/>
       <Route path='/guide' element={<ProductGuide/>}/>

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["Admin"]}>
            <AdminPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/manager"
        element={
          <ProtectedRoute allowedRoles={["Manager"]}>
            <ManagerPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employee"
        element={
          <ProtectedRoute allowedRoles={["Employee"]}>
            <EmployeePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <ProjectPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/kanban"
        element={
          <ProtectedRoute>
            <KanbanPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <TaskPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute>
            <AdminDashBoard/>
          </ProtectedRoute>
        }
      />

      <Route
        path="/Setting"
        element={
          <ProtectedRoute>
            <SettingsPage/>
          </ProtectedRoute>
        }
      />

      <Route
        path="/ManagerDashBoard"
        element={
          <ProtectedRoute>
            <ManagerDashBoard/>
          </ProtectedRoute>
        }
      />

    </Routes>
  );
};

export default MainRouter;
