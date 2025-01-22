import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../images/undraw_services_dhxj.svg"; // Replace with your image or illustration
import web from "../images/web.png";
import { FaRocket, FaUsers, FaGlobe } from "react-icons/fa"; // Import icons

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO & Founder",
    bio: "John is passionate about creating innovative solutions that drive business growth.",
    image: web, // Replace with actual image URL
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Lead Designer",
    bio: "Jane specializes in crafting intuitive and visually stunning user interfaces.",
    image: web,
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Senior Developer",
    bio: "Mike is an expert in building scalable and high-performance web applications.",
    image: web,
  },
];

const milestones = [
  {
    id: 1,
    year: "2015",
    event: "Founded Behoop",
    description:
      "Our journey began in 2015 with a vision to deliver top-notch web solutions for businesses seeking a strong online presence.",
    icon: <FaRocket className="text-4xl text-white" />, // Rocket icon for "Founded"
  },
  {
    id: 2,
    year: "2018",
    event: "100+ Clients",
    description:
      "By 2018, we had successfully partnered with over 100 clients, delivering tailored solutions that exceeded expectations.",
    icon: <FaUsers className="text-4xl text-white" />, // Users icon for "Clients"
  },
  {
    id: 3,
    year: "2023",
    event: "Global Expansion",
    description:
      "In 2023, we expanded our reach to international markets, helping businesses worldwide achieve their goals with innovative solutions.",
    icon: <FaGlobe className="text-4xl text-white" />, // Globe icon for "Global Expansion"
  },
];

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-light via-white to-light-teal py-24 overflow-hidden">
      {/* Background Elements */}
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
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={AboutImage}
              alt="About Behoop"
              className="w-full max-w-lg rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full blur-xl opacity-50"></div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
              <span className="bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent">
                About Behoop
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At <span className="font-semibold text-primary-dark">Behoop</span>
              , we specialize in crafting stunning, functional websites that
              help businesses establish a powerful online presence. With a blend
              of creativity and cutting-edge technology, we deliver results that
              exceed expectations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From designing intuitive user experiences to building robust
              e-commerce platforms, our team has the expertise to bring your
              vision to life. Your success is our mission, and we’re committed
              to helping you thrive in the digital world.
            </p>

            {/* Bullet Points */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary-dark rounded-full mr-3"></div>
                <p className="text-gray-600">
                  Customized solutions tailored to your needs.
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary-dark rounded-full mr-3"></div>
                <p className="text-gray-600">
                  Cutting-edge technologies for superior performance.
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary-dark rounded-full mr-3"></div>
                <p className="text-gray-600">
                  Dedicated support and maintenance.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex space-x-6">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white py-3 px-8 rounded-full shadow-lg hover:opacity-90 transform hover:scale-105 transition-all"
              >
                Learn More
              </a>
              <a
                href="#services"
                className="inline-block border-2 border-primary-dark text-primary-dark py-3 px-8 rounded-full shadow hover:bg-primary-dark hover:text-white transition-colors"
              >
                Our Services
              </a>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mt-24 px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="relative bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gradient transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300 -z-10"></div>

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-md"
                />
                <h4 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {member.name}
                </h4>
                <p className="text-gray-600 text-center font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-500 text-center text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values & Mission Section */}
        <div className="mt-24 px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Our Values & Mission
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full mb-6">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Innovation
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We embrace creativity and cutting-edge technology to deliver
                innovative solutions that drive progress.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-green-50 rounded-full mb-6">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Excellence
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We strive for excellence in everything we do, ensuring the
                highest quality results for our clients.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-purple-50 rounded-full mb-6">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Collaboration
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We believe in working together with our clients and partners to
                achieve shared success.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
