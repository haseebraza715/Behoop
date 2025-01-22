import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import Ecom from "../images/images_Ecom.png";
import Health from "../images/Healthcare app.jpeg";
import Corp from "../images/cwebsite.webp";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    thumbnail: Ecom,
    description:
      "A fully functional e-commerce platform with seamless user experience.",
    problem:
      "The client needed a scalable and user-friendly e-commerce solution to handle high traffic and complex product catalogs.",
    solution:
      "We developed a custom platform using React for the frontend and Node.js for the backend, integrated with a robust payment gateway.",
    outcome:
      "Increased sales by 150% and reduced page load time by 40%, resulting in higher customer satisfaction.",
    link: "#",
  },
  {
    id: 2,
    title: "Healthcare App",
    thumbnail: Health,
    description: "A mobile app for managing patient records and appointments.",
    problem:
      "The healthcare provider struggled with outdated systems and inefficient patient management.",
    solution:
      "We built a cross-platform app using Flutter, integrated with a secure cloud database for real-time updates.",
    outcome:
      "Improved patient satisfaction by 30% and reduced administrative workload by 50%.",
    link: "#",
  },
  {
    id: 3,
    title: "Corporate Website",
    thumbnail: Corp,
    description: "A modern website for a global corporation.",
    problem:
      "The client needed a responsive and visually appealing website to reflect their brand identity.",
    solution:
      "We designed and developed a website using Tailwind CSS and React, ensuring fast load times and mobile responsiveness.",
    outcome:
      "Increased website traffic by 200% and improved user engagement by 60%.",
    link: "#",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
              Our Portfolio
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore some of the projects we’ve worked on and the impact they’ve
            made.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative group cursor-pointer rounded-xl shadow-lg hover:shadow-2xl transition-all bg-white overflow-hidden border border-gray-100"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-accent opacity-0 group-hover:opacity-80 transition-opacity"></div>
                {/* Hover Text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-lg font-semibold">
                    View Details
                  </p>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white shadow-2xl rounded-2xl max-w-3xl w-full p-8 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 bg-primary-dark text-white rounded-full p-2 hover:scale-110 transition-transform"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              <div className="space-y-6">
                {/* Project Title */}
                <h3 className="text-3xl font-bold text-gray-800">
                  {selectedProject.title}
                </h3>

                {/* Problem */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Problem
                  </h4>
                  <p className="text-gray-600">{selectedProject.problem}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Solution
                  </h4>
                  <p className="text-gray-600">{selectedProject.solution}</p>
                </div>

                {/* Outcome */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Outcome
                  </h4>
                  <p className="text-gray-600">{selectedProject.outcome}</p>
                </div>

                {/* View Project Button */}
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-primary to-primary-dark text-white py-3 px-6 rounded-full hover:opacity-90 transition-opacity"
                >
                  <span>View Project</span>
                  <FiArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
