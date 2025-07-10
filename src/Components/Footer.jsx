import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">TaskFlow</h3>
          <p className="text-sm mb-4">
            Your all-in-one workspace to manage tasks, collaborate, and boost productivity.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link to="#" className="hover:text-white"><FaFacebookF /></Link>
            <Link to="#" className="hover:text-white"><FaTwitter /></Link>
            <Link to="#" className="hover:text-white"><FaInstagram /></Link>
            <Link to="#" className="hover:text-white"><FaLinkedinIn /></Link>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/features" className="hover:text-white">Features</Link></li>
            <li><Link to="/solutions" className="hover:text-white">Solutions</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Docs</Link></li>
            <li><Link to="/" className="hover:text-white">Blog</Link></li>
            <li><Link to="/" className="hover:text-white">Customer Stories</Link></li>
            <li><Link to="/" className="hover:text-white">Community</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-white">Terms of Service</Link></li>
            <li><Link to="/" className="hover:text-white">Security</Link></li>
            <li><Link to="/" className="hover:text-white">Sitemap</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TaskFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
