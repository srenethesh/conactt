import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Startup Landing Page",
    image: "/msntetratech.png",
    description: "Modern responsive website built with React.js and Tailwind CSS.",
    github: "https://github.com/yourusername/startup-landing",
    live: "https://your-startup-site.com",
  },
  {
    title: "E-commerce Dashboard",
    image: "/underdevelopment.png",
    description: "Admin panel for managing products, orders, and analytics.",
    github: "https://github.com/yourusername/ecommerce-dashboard",
    live: "https://dashboard-demo.com",
  },
  {
    title: "AI Chatbot UI",
    image: "/underdevelopment.png",
    description: "Frontend for an AI chatbot using React and OpenAI API.",
    github: "https://github.com/yourusername/chatbot-ui",
    live: "https://chatbot-ui-demo.com",
  },
  {
    title: "Portfolio Website",
    image: "/portfolio.png",
    description: "Personal portfolio showcasing skills, services, and contact form.",
    github: "https://github.com/yourusername/portfolio-site",
    live: "https://your-portfolio.com",
  },
  {
    title: "Booking App",
    image: "/underdevelopment.png",
    description: "Full-stack appointment booking system with payment integration.",
    github: "https://github.com/yourusername/booking-app",
    live: "https://bookingsite.com",
  },
  {
    title: "Marketing Agency Website",
    image: "/underdevelopment.png",
    description: "Conversion-focused website for digital marketing services.",
    github: "https://github.com/yourusername/agency-site",
    live: "https://agency-demo.com",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.1,
      ease: "easeOut",
    },
  }),
};

const Portfolio = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
      >
        Our Work
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            custom={index}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 flex flex-col justify-between h-full">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-white transition flex items-center gap-1"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-white transition flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
