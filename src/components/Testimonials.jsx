import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Yuvaraj",
    role: "Founder, YuvaProDesigns",
    quote:
      "Working with Conact was a game-changer. Our new site looks incredible and our traffic doubled in a month!",
    image: "/yuvaraj.png",
  },
  {
    name: "Priya Reddy",
    role: "Marketing Lead, Brandly",
    quote:
      "They didn’t just build a website — they crafted a digital experience. Professional, fast, and visually stunning!",
    image: "/priya.png",
  },
  {
    name: "Jayden Kapoor",
    role: "CTO, FinBoost",
    quote:
      "Clean UI, blazing speed, and SEO-optimized — exactly what we needed. Highly recommend their team.",
    image: "/jayden.png",
  },
  {
    name: "Gopinath",
    role: "Assistant Professor, SMVEC",
    quote:
      "Their creative vision and technical execution made our product launch seamless and powerful.",
    image: "/gopinath.png",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-16">
        What Our Clients Say
      </h2>
    <div className="flex flex-col gap-6">
        <motion.div
        className="flex gap-6"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...testimonials, ...testimonials].map((client, i) => (
          <div
            key={i}
            className="min-w-[300px] max-w-sm bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={client.image}
                alt={client.name}
                className="w-12 h-12 rounded-full object-cover border border-indigo-500"
              />
              <div>
                <h4 className="font-semibold">{client.name}</h4>
                <p className="text-sm text-gray-400">{client.role}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">“{client.quote}”</p>
          </div>
        ))}
      </motion.div>
    </div>
      
    </section>
  );
};

export default Testimonials;
