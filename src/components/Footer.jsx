import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-32 px-6 py-12 bg-white/5 backdrop-blur-lg border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/conactt_logo-removebg-preview.png" alt="logo" className="w-8 h-13" />
            <h1 className="text-xl font-bold">Conact</h1>
          </div>
          <p className="text-sm text-gray-400">
            Design, develop, and scale your digital presence — the Conact way.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-indigo-400 cursor-pointer">Home</li>
            <li className="hover:text-indigo-400 cursor-pointer">Services</li>
            <li className="hover:text-indigo-400 cursor-pointer">Portfolio</li>
            <li className="hover:text-indigo-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p className="text-sm text-gray-400">info@theconact.com</p>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-indigo-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-indigo-500 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-indigo-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-indigo-500 transition">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-12 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Conact. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
