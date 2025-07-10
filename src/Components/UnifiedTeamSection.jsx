import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const UnifiedTeamSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Bring every team together under{" "}
          <span className="text-indigo-600">one roof</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Spend less time trying to get aligned and more time driving projects
          forward with confidence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-14 items-center max-w-7xl mx-auto">
        {/* Left Image */}
        <div className="relative w-full">
          <div className="absolute -top-8 -left-6 flex gap-2 animate-pulse">
            <FaStar className="text-yellow-400 text-xl rotate-[12deg]" />
            <FaStar className="text-yellow-500 text-sm rotate-[-5deg]" />
            <FaStar className="text-yellow-300 text-md rotate-[18deg]" />
          </div>

          <div className="relative bg-gray-50 border border-gray-200 rounded-2xl shadow-2xl p-6">
            <img
              src="https://dam-cdn.atl.orangelogic.com/AssetLink/ex8536t33720160jkps31diiavoq7wa6.webp"
              alt="Calendar Task"
              className="rounded-xl w-full"
            />

            <div className="absolute bottom-4 right-4 bg-yellow-400 text-white text-sm px-3 py-1 rounded-full font-semibold shadow-lg">
              Assigned
            </div>
          </div>
        </div>

        {/* Right Text */}
        <div className="text-left">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Everything in one place
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The context you need, when you need it. See software team release
            dates, real-time views of Figma designs, and more — all inside your
            task hub.
          </p>
          <Link to=''
            href="#"
            className="text-indigo-600 font-medium hover:underline text-sm"
          >
            Explore features →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UnifiedTeamSection;
