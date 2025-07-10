# 🚀 Enterprise Work Management System

A modular, scalable, and production-ready Enterprise Work Management System built using **React** and its ecosystem. This system includes authentication, role-based access, project/task management, analytics, and real-time-like updates (simulated using `localStorage`).

---

## 🛠 Tech Stack

- **React** (Functional Components + Hooks)
- **React Router DOM**
- **Context API** (for Authentication and Role Management)
- **Axios** (for mocking API structure, even if localStorage is used)
- **Tailwind CSS** (Responsive UI)
- **React Hook Form + Yup** (Form handling and validation)
- **React Toastify** (Notifications)
- **Recharts** (Data visualization)
- **React DnD / react-beautiful-dnd** (Kanban drag and drop)
- **Jest + React Testing Library** (Testing)

---

## 🌐 Live Demo

🔗 [Hosted on Vercel](https://enterprise-work-management-system.vercel.app/)

---

## 📁 Folder Structure

src/
│
├── Auth/ # AuthContext and ProtectedRoute
├── Components/ # Navbar, Hero, Footer, Dashboard Widgets, etc.
├── DashBoardPages/ # Dashboards for Admin, Manager, Employee
├── LoginPages/ # Login and Signup pages
├── ProjectPages/ # Project-related views
├── Roles/ # AdminPage, ManagerPage, EmployeePage
├── Routers/ # MainRouter, TopNavbar
├── TaskPages/ # Kanban, Task view
├── utils/ # LocalStorage helpers
└── App.jsx # Main App component

yaml
Copy
Edit

---

## 🧩 Features

### 🔐 User Authentication & Roles
- Login / Signup using dummy credentials
- Role-based access control: `Admin`, `Manager`, `Employee`
- State saved to `localStorage`

### 📊 Dashboard
- Metrics: Total Projects, Tasks, Completed, Pending
- Recent activity feed
- Real-time-like notification simulation

### 📁 Project & Task Management
- CRUD for Projects and Tasks
- Task types: Bug, Feature, Improvement
- Drag-and-drop Kanban board
- Due dates, priority, comments (all stored in localStorage)

### 👥 User Management (Admin only)
- View all users
- Assign roles
- Track last activity

### 📈 Reporting & Analytics
- Charts and graphs with Recharts
- Project health visualization

### 🔔 Notifications
- Toast alerts (React Toastify)
- Simulated real-time UI updates

### ⚙️ Settings Page
- Light/Dark mode toggle
- Update profile and password (stored locally)

---

## 🧪 Testing

- ✅ Unit tests written for 5+ components using `Jest` and `React Testing Library`
- ✅ Integration test: Login → Create Project → Assign Task

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/enterprise-taskflow.git
cd enterprise-taskflow
npm install
npm run dev  # or npm run start
📝 Scripts
bash
Copy
Edit
npm run dev         # Run in development mode
npm run test        # Run test suite
npm run build       # Build for production
