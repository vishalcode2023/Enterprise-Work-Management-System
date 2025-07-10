import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const RecognitionSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 60,
      duration: 1.4,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-[#f8fbff] to-white py-24 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Illustration */}
        <div className="relative flex justify-center items-center">
          {/* Glowing Blobs */}
          <div className="absolute w-64 h-64 bg-purple-300 opacity-20 blur-3xl rounded-full -top-16 -left-12 animate-pulse"></div>
          <div className="absolute w-40 h-40 bg-blue-300 opacity-20 blur-2xl rounded-full -bottom-10 right-6 animate-pulse"></div>

          {/* Mock UI (Placeholder Image or Box Design) */}
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md relative z-10 border">
            <div className="space-y-4">
              <div className="bg-blue-100 h-4 w-3/4 rounded-md"></div>
              <div className="bg-blue-200 h-4 w-2/3 rounded-md"></div>
              <div className="bg-gray-300 h-4 w-1/2 rounded-md"></div>
              <div className="bg-green-400 h-6 w-20  rounded-full text-center text-xs text-white font-bold">
                <span className=" relative top-1">DONE</span>
              </div>
              <div className="bg-gray-200 h-4 w-5/6 rounded-md"></div>
            </div>
          </div>

          {/* Floating User Top */}
          <div className="absolute top-0 -right-6 bg-white/70 backdrop-blur-lg border rounded-full shadow-lg px-4 py-2 flex items-center gap-2 z-20 hover:scale-105 transition">
            <img
              src="https://images.pexels.com/photos/948873/pexels-photo-948873.jpeg"
              alt="Engineering"
              className="w-7 h-7  md:w-12 md:h-12 rounded-full object-cover"
            />
            <span className="text-xs font-semibold text-gray-800">@Engineering</span>
          </div>

          {/* Floating User Bottom */}
          <div className="absolute bottom-0 -left-6 bg-white/70 backdrop-blur-lg border rounded-full shadow-lg px-4 py-2 flex items-center gap-2 z-20 hover:scale-105 transition">
            <img
              src="https://as2.ftcdn.net/v2/jpg/04/31/64/75/1000_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg"
              alt="Marketing"
              className="w-7 h-7  md:w-12 md:h-12 rounded-full object-cover"
            />
            <span className="text-xs font-semibold text-gray-800">@Marketing</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 text-transparent bg-clip-text">
              Recognized as a Leader
            </span>{" "}
            <br /> in Modern Workspaces
          </h2>

          <p className="text-gray-700 text-lg mb-6 max-w-xl mx-auto lg:mx-0">
            TaskFlow is trusted globally by teams across industries to
            streamline planning, automate execution, and drive results with
            clarity and speed.
          </p>

          <div className="text-sm text-gray-600">
            Featured by{" "}
            <span className="text-blue-600 font-medium underline cursor-pointer">
              Product Hunt
            </span>{" "}
            and{" "}
            <span className="text-purple-600 font-medium underline cursor-pointer">
              TechRadar
            </span>{" "}
            for innovation and performance.
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
