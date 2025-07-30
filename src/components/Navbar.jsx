import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to toggle blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="flex w-full"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div
        className={`fixed top-5 left-1/2 -translate-x-1/2 w-[60%] max-w-[1200px] h-14 z-50 flex items-center justify-between rounded-full px-6 py-4 border transition-all duration-300 
        ${isScrolled ? 'bg-white/10 backdrop-blur-md shadow-md border-indigo-400' : 'bg-transparent border-transparent'}`}
      >
        {/* Logo */}
        <div className="flex flex-row items-center justify-center gap-2">
          <img
            className="flex"
            src="/conactt_logo-removebg-preview.png"
            alt="Logo"
            width="30px"
            height="30px"
          />
          <h2 className="font-bold text-white text-2xl">Conact </h2>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <h2 className="text-white font-medium text-[17px] hover:text-indigo-600 cursor-pointer" >Services</h2>
          <h2 className="text-white font-medium text-[17px] hover:text-indigo-600 cursor-pointer">Portfolio</h2>
          <a href="https://cal.com/srenethesh/">
            <button className="bg-indigo-500 text-white font-bold rounded-full w-32 py-2 px-4 shadow-lg hover:shadow-xl active:translate-y-1 active:shadow-md transition-all duration-200">
              Book a call
            </button>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-white/30 border backdrop-blur-md border-indigo-200 rounded-xl p-5 w-[80%] flex flex-col items-center space-y-4 shadow-md md:hidden z-50">
            <h2 className="text-white font-medium hover:text-indigo-600 cursor-pointer">Services</h2>
            <h2 className="text-white font-medium hover:text-indigo-600 cursor-pointer">Portfolio</h2>
            <a href="https://cal.com/srenethesh/">
              <button className="bg-indigo-500 text-white font-bold rounded-full w-40 py-2 px-4 shadow-lg hover:shadow-xl active:translate-y-1 active:shadow-md transition-all duration-200">
                Book a call
              </button>
            </a>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
