import React from "react";
import {
  BookOpenCheck,
  CalendarCheck2,
  LayoutDashboard,
  Users,
  Zap,
} from "lucide-react";
import TopNavbar from "../Routers/TopNavbar";
import Footer from "./Footer";

const guideSections = [
  {
    icon: <LayoutDashboard className="text-indigo-600 w-6 h-6" />,
    title: "1. Set Up Your Workspace",
    description:
      "Create your team workspace, invite collaborators, and define your project structure in just a few clicks.",
  },
  {
    icon: <Users className="text-indigo-600 w-6 h-6" />,
    title: "2. Add Team Members",
    description:
      "Add teammates with roles (Admin, Manager, Employee) and assign them to specific projects and tasks.",
  },
  {
    icon: <BookOpenCheck className="text-indigo-600 w-6 h-6" />,
    title: "3. Create Tasks & Projects",
    description:
      "Organize your work into projects and tasks. Add due dates, priorities, and assign owners for visibility.",
  },
  {
    icon: <CalendarCheck2 className="text-indigo-600 w-6 h-6" />,
    title: "4. Track Progress",
    description:
      "Use dashboards, status indicators, and activity logs to track progress and ensure team accountability.",
  },
  {
    icon: <Zap className="text-indigo-600 w-6 h-6" />,
    title: "5. Automate Workflows",
    description:
      "Reduce manual effort with smart triggers and automated reminders for deadlines and approvals.",
  },
];

const ProductGuide = () => {
  return (
    <div>
        <TopNavbar/>
      <div className="min-h-screen bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-4">
            🚀 Get Started with TaskFlow
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg mb-12">
            Follow these simple steps to set up your workspace, onboard your
            team, and start managing tasks effectively.
          </p>

          <div className="space-y-10">
            {guideSections.map((section, index) => (
              <div
                key={index}
                className="flex gap-6 items-start bg-gray-50 p-6 rounded-xl shadow-sm border border-indigo-100 hover:shadow-md transition"
              >
                <div className="flex-shrink-0">{section.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{section.description}</p>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductGuide;
