import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer website design, development, branding, and digital marketing tailored to your business goals.",
  },
  {
    question: "How long does a project usually take?",
    answer: "Depending on the scope, projects typically take 2–6 weeks from design to deployment.",
  },
  {
    question: "Do you work with startups or established brands?",
    answer: "Both! Whether you're a startup or scaling company, we create solutions that help you grow online.",
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Absolutely! We can rework your existing site to make it modern, responsive, and optimized for conversions.",
  },
  {
    question: "What’s your pricing structure?",
    answer: "We offer flexible packages based on your needs—whether it’s a single landing page or a full platform.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes. We offer support and maintenance plans to keep your website running smoothly after launch.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-5 cursor-pointer flex justify-between items-center hover:bg-white/10 transition"
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {activeIndex === index && (
              <motion.p
                className="mt-3 px-4 text-gray-300 text-m"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
