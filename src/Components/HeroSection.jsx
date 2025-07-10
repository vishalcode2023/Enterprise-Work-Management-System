import React, { useEffect, useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";
import gsap from "gsap";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const headlineRef = useRef(null);
  const textRef = useRef(null);
  const listRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.from(headlineRef.current, { opacity: 0, y: -30 })
      .from(textRef.current, { opacity: 0, y: 20 }, "-=0.6")
      .from(listRef.current?.children, {
        opacity: 0,
        y: 10,
        stagger: 0.2,
      }, "-=0.5")
      .from(cardRef.current, { scale: 0.95, opacity: 0, duration: 0.8 }, "-=1");
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Hero Text Content */}
        <div className="text-center lg:text-left">
          <h1
            ref={headlineRef}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
          >
            Achieve <span className="text-indigo-600">Great Outcomes</span><br />
            with <span className="underline decoration-yellow-400">TaskFlow</span>
          </h1>

          <p ref={textRef} className="text-gray-700 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
            Your all-in-one workspace to manage tasks, projects, and team collaboration — built for efficiency and scale.
          </p>

          <ul ref={listRef} className="text-left text-gray-600 list-disc pl-6 space-y-2 hidden sm:block">
            <li>✔️ Plan, track, and manage with ease</li>
            <li>✔️ Collaborate in real-time</li>
            <li>✔️ Boost productivity across teams</li>
          </ul>
        </div>

        {/* Right: Login Section */}
        <div
          ref={cardRef}
          className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md mx-auto"
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Log in or Sign up
          </h2>

          <p className="text-sm text-gray-500 text-center mb-6">
            Choose your preferred login method
          </p>

          <div className="space-y-4">
            <Link to='/signup' className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-full transition duration-200">
              <FcGoogle size={22} />
              Continue with Google
            </Link>

            <Link to='/signup' className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-full transition duration-200">
              <FaMicrosoft size={22} className="text-blue-600" />
              Continue with Microsoft
            </Link>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            By continuing, you agree to our{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">Terms</span> and{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">Privacy Policy</span>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
