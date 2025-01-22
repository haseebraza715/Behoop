import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowUp } from "react-icons/fi";

// Import uploaded illustrations
import WebDevIllustration from "../images/undraw_web-developer_ggt0.svg";
import WireframingIllustration from "../images/undraw_wireframing_d3cx.svg";
import SearchEnginesIllustration from "../images/undraw_search-engines_k649.svg";

const services = [
  {
    illustration: WebDevIllustration,
    title: "Web Development",
    description:
      "Crafting high-performance, secure, and scalable websites tailored to your goals.",
    details:
      "Our web development services include front-end, back-end, and full-stack solutions. We specialize in creating responsive, user-friendly interfaces, integrating advanced technologies like React, Node.js, and more.",
  },
  {
    illustration: WireframingIllustration,
    title: "UI/UX Design",
    description:
      "Turning your ideas into visually stunning, user-friendly designs that drive engagement.",
    details:
      "We design intuitive interfaces that prioritize usability and aesthetics. Our team conducts user research, creates wireframes, and delivers pixel-perfect designs for web and mobile applications.",
  },
  {
    illustration: SearchEnginesIllustration,
    title: "SEO & Marketing",
    description:
      "Empowering your brand with targeted strategies to boost visibility and conversions.",
    details:
      "Our SEO and marketing services focus on increasing your search engine rankings, driving traffic, and optimizing conversions. We implement data-driven strategies tailored to your industry.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleLearnMore = (index) => {
    setSelectedService(index === selectedService ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-light via-white to-light-teal py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.3 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-primary-dark rounded-full blur-3xl opacity-20"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.3 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
            <span className="bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our innovative and tailored solutions designed to help your
            business thrive.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all bg-white overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.02 }} // Add hover scale effect
            >
              {/* Illustration */}
              <div className="mb-6">
                <motion.img
                  src={service.illustration}
                  alt={service.title}
                  className="w-full h-48 object-contain transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary-dark transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Learn More Button */}
              <button
                onClick={() => handleLearnMore(index)}
                className="inline-flex items-center mt-6 font-semibold text-primary group-hover:text-primary-dark transition-colors"
                aria-expanded={selectedService === index}
                aria-controls={`service-details-${index}`}
              >
                {selectedService === index ? "Show Less" : "Learn More"}
                {selectedService === index ? (
                  <FiArrowUp className="ml-2" />
                ) : (
                  <FiArrowRight className="ml-2" />
                )}
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {selectedService === index && (
                  <motion.div
                    id={`service-details-${index}`}
                    className="mt-6 p-4 bg-gradient-to-br from-gray-100 to-white rounded-lg shadow-inner"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-700">{service.details}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Background Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <motion.a
            href="#contact"
            className="bg-gradient-to-r from-primary to-primary-dark text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Get Started
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Services;
