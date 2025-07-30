import { motion } from "framer-motion";
import {
  Code2,
  Megaphone,
  Search,
  ShoppingCart,
  Palette,
  BarChart2,
  CheckCircle2,
} from "lucide-react";
const services = [
  {
    title: "Web Development",
    icon: <Code2 className="text-white w-6 h-6" />,
    desc: "Modern websites & apps using React, Next.js, Spring Boot & Node.js.",
    points: ["Responsive Design", "Fast Loading", "SEO Optimized", "Mobile First"],
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone className="text-white w-6 h-6" />,
    desc: "Strategies to boost online visibility and drive traffic.",
    points: ["Social Media", "PPC Campaigns", "Content Marketing", "Email Marketing"],
  },
  {
    title: "SEO Optimization",
    icon: <Search className="text-white w-6 h-6" />,
    desc: "Techniques to improve rankings and organic reach.",
    points: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
  },
  {
    title: "E-commerce Solutions",
    icon: <ShoppingCart className="text-white w-6 h-6" />,
    desc: "Seamless platforms for converting visitors into customers.",
    points: ["Payment Integration", "Inventory Management", "Order Tracking", "Customer Portal"],
  },
  {
    title: "Brand Strategy",
    icon: <Palette className="text-white w-6 h-6" />,
    desc: "Craft identities that stand out and build recognition.",
    points: ["Logo Design", "Visual Identity", "Brand Messaging", "Guidelines"],
  },
  {
    title: "Analytics & Insights",
    icon: <BarChart2 className="text-white w-6 h-6" />,
    desc: "Use data to optimize and grow your business.",
    points: ["User Behavior", "Conversion Analysis", "ROI Reporting", "Performance Tracking"],
  },
];

const Services = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-white"
    
    >
      <motion.h2 className="text-4xl font-bold text-center mb-12"
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        viewport={{once:true}}
        >Our Services</motion.h2>

      <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1, delay:0.3}}
        viewport={{once:true}}
      >
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
          >
            <div className="bg-indigo-500 p-3 rounded-lg w-fit mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{service.desc}</p>
            <ul className="space-y-1">
              {service.points.map((point, i) => (
                <li key={i} className="flex items-center text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 mr-2" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
