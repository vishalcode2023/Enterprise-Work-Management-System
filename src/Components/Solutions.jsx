import React from "react";
import {
  Briefcase,
  Users,
  Settings,
  ClipboardList,
  CheckCircle,
} from "lucide-react";
import TopNavbar from "../Routers/TopNavbar";
import Footer from "./Footer";

const solutions = [
  {
    icon: <Briefcase className="text-indigo-600 w-6 h-6" />,
    title: "Project Execution",
    description:
      "Empower your teams to manage and execute complex projects with milestones, deadlines, and live updates.",
  },
  {
    icon: <Users className="text-indigo-600 w-6 h-6" />,
    title: "Team Collaboration",
    description:
      "Break down silos. Collaborate across departments with shared boards, chat, and activity logs.",
  },
  {
    icon: <ClipboardList className="text-indigo-600 w-6 h-6" />,
    title: "Task Management",
    description:
      "Assign, track, and prioritize tasks effortlessly with customizable Kanban boards and notifications.",
  },
  {
    icon: <Settings className="text-indigo-600 w-6 h-6" />,
    title: "Workflow Automation",
    description:
      "Save time by automating repetitive tasks, approvals, and reminders with our smart rule engine.",
  },
];

const Solutions = () => {
  return (
    <div>
        <TopNavbar/>
      <div className="min-h-screen bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left Text Section */}
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 leading-snug mb-6">
              Tailored Solutions <br />
              for <span className="text-indigo-600">Modern Teams</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Whether you're a startup or an enterprise, TaskFlow adapts to how
              you work — so you can move faster and smarter.
            </p>

            <ul className="space-y-6">
              {solutions.map((sol, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">{sol.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {sol.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{sol.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Illustration or Screenshot */}
          <div className="rounded-2xl shadow-lg overflow-hidden">
            <img
              src="https://dam-cdn.atl.orangelogic.com/AssetLink/j7ib7le01l6x411v5h42l87m64l0f611.webp"
              alt="Solutions preview"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Solutions;
