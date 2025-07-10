import React, { useEffect, useRef } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import gsap from "gsap";

const TaskPlannerSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-[#f8fbff] to-white py-24 px-6 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl sm:text-4xl font-extrabold text-gray-900 mb-10 leading-tight">
            Made for <span className="text-indigo-600">complex projects</span>{" "}
            <br />
            or <span className="">everyday tasks</span>
          </h2>

          <div className="space-y-8">
            {/* Active Feature */}
            <div className="relative flex gap-4 items-start bg-white border-l-4 border-indigo-600 pl-6 py-5 pr-4 rounded-xl shadow hover:shadow-lg transition-all duration-300">
              <div className="text-indigo-600 text-xl mt-1">
                <BsLightningChargeFill />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Plan and organize tasks
                </h3>
                <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                  Break big ideas into achievable steps. Organize work, set
                  milestones, and visually map team progress to success.
                </p>
              </div>
            </div>

            {/* Other Features */}
            {[
              "Align work to goals",
              "Track work your way",
              "Optimize with insights",
            ].map((title, idx) => (
              <div
                key={idx}
                className="group flex gap-4 items-center pl-4 py-2 transition-all hover:bg-indigo-50 rounded-lg cursor-pointer"
              >
                <FaRegCheckCircle className="text-gray-400 group-hover:text-indigo-600 text-lg transition" />
                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition">
                  {title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative w-full">
          <div className="absolute -top-6 -left-6 w-3/4 h-[110%] bg-gradient-to-br from-green-100 to-green-200 rounded-3xl transform -rotate-2 -z-10 shadow-2xl"></div>
          <img
            src="https://dam-cdn.atl.orangelogic.com/AssetLink/j7ib7le01l6x411v5h42l87m64l0f611.webp"
            alt="Task Planner Screenshot"
            className="w-full rounded-3xl shadow-2xl border border-gray-200"
          />
        </div>
      </div>
    </section>
  );
};

export default TaskPlannerSection;
