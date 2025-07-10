import React from "react";
import { CheckCircle } from "lucide-react";
import TopNavbar from "../Routers/TopNavbar";
import Footer from "./Footer";

const features = [
  {
    title: "Real-Time Collaboration",
    description:
      "Work with your team in real-time. See changes live as they happen.",
  },
  {
    title: "Task & Project Management",
    description: "Create, assign, and track tasks with customizable workflows.",
  },
  {
    title: "Role-Based Access",
    description:
      "Give your team the right tools with Manager, Admin, and Employee roles.",
  },
  {
    title: "Visual Dashboards",
    description:
      "Get clear insights into progress using Kanban boards and charts.",
  },
  {
    title: "Secure Authentication",
    description: "Login with Google or Microsoft securely using OAuth 2.0.",
  },
  {
    title: "Notifications & Activity Log",
    description: "Stay updated with real-time alerts and audit trails.",
  },
];

const Features = () => {
  return (
    <div>
        <TopNavbar/>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side – Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Discover the Power of{" "}
              <span className="text-indigo-600">TaskFlow</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Everything you need to plan, manage, and collaborate — built for
              efficiency and scale.
            </p>

            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-indigo-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side – Illustration or Image */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <img
              src="https://dam-cdn.atl.orangelogic.com/AssetLink/thb1c563p4m28u32ri7fe867jx24dxpl.webp"
              alt="TaskFlow features"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Features;
