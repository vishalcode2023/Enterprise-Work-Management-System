import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaQuoteRight } from "react-icons/fa";
import { MdStars } from "react-icons/md";

const TestimonialSection = () => {
  const quoteRef = useRef(null);

  useEffect(() => {
    gsap.from(quoteRef.current, {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="bg-gray-900 py-20 px-6 md:px-12 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left Side */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <MdStars className="text-purple-500 text-3xl animate-pulse" />
            <h3 className="text-3xl font-extrabold">
              For teams <span className="text-purple-400">big & small</span>
            </h3>
          </div>
          <p className="text-gray-300 text-lg mb-6">
            Hear from start-ups & large enterprises that prefer TaskFlow.
          </p>
          <a
            href="#"
            className="text-blue-400 font-semibold hover:underline text-sm"
          >
            See more customer stories →
          </a>
        </div>

        {/* Right Side: Quote */}
        <div
          ref={quoteRef}
          className="bg-white text-gray-900 rounded-2xl shadow-2xl p-6 md:p-8 relative"
        >
          {/* Floating quote icon */}
          <FaQuoteRight className="text-yellow-500 text-3xl absolute -top-4 -right-4 rotate-12" />

          {/* Testimonial content */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="min-w-[120px] w-[120px] h-[120px] rounded-xl overflow-hidden bg-indigo-500">
              <img
                src="https://dam-cdn.atl.orangelogic.com/AssetLink/thb1c563p4m28u32ri7fe867jx24dxpl.webp"
                alt="Joe Cotant"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg mb-4">
                “Before, our team saw tools as individual islands. With
                TaskFlow’s integrations, it's become essential for
                collaboration, productivity, and discoverability.”
              </p>
              <hr className="border-t border-gray-300 mb-2 w-20" />
              <h4 className="font-bold">Joe Cotant</h4>
              <span className="text-sm text-gray-500">
                Senior Program Manager, Roblox
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
