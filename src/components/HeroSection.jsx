import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
const HeroSection = () => {
  return (
     <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br">

      <div className="max-w-6xl mx-auto text-center flex flex-col items-center space-y-12">
        <motion.div
            initial={{opacity:0, scale:0.8}}
            animate={{opacity:1, scale:1}}
            transition={{duration:1.5, ease:"easeOut"}}
        />            
        <motion.div
            initial={{opacity:0, x:-100}}
            animate={{opacity:1, x:0}}

        />
        {/* Main Heading */}
        <motion.h1 initial={{opacity:0, y:-50}}
            animate={{opacity:1, y:0}}
            transition={{duration:1, ease:"easeOut"}} 
            className="text-5xl md:text-6xl font-bold text-indigo-400 leading-tight">
          Websites That Look Great. <br></br>Marketing That Performs.
        </motion.h1>

        {/* Subheading */}
        <motion.p 
           initial={{opacity:0,y:50}}
           animate={{opacity:1,y:0}}
           transition={{duration:1, delay:0.3}}
           className="text-lg md:text-xl text-gray-400 max-w-2xl">
          We help businesses get online and grow with design, development, and digital campaigns that deliver results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4">
        <a href='https://cal.com/srenethesh/'>
            <button className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl active:translate-y-1 transition">
                Book a Call with Srenethesh
            </button>
        </a>
          
          <button className="border border-indigo-500 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-100 transition">
            Our Services
          </button>
        </motion.div>
      </div>
    </section>
    
    
  );
};

export default HeroSection;
