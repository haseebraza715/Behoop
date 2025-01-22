import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPaperPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import ContactIllustration from "../images/undraw_contact-us_kcoa.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation
    if (name === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
      setErrors({ ...errors, email: "Invalid email address." });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Invalid email address.";
    if (!formData.message) formErrors.message = "Message is required.";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Simulate form submission
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    }, 2000);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

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
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
            <span className="bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Let’s create something amazing together. Reach out to us today!
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: SVG Illustration */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={ContactIllustration}
              alt="Contact Us"
              className="w-full max-w-lg"
            />
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h3>
            {success && (
              <motion.div
                className="mb-6 text-green-600 font-semibold"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Message sent successfully!
              </motion.div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Name
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg py-3 px-4">
                  <FaUser className="text-primary-dark mr-3" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full focus:ring-primary focus:border-primary outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Email
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg py-3 px-4">
                  <FaEnvelope className="text-primary-dark mr-3" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full focus:ring-primary focus:border-primary outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Message
                </label>
                <div className="border border-gray-300 rounded-lg p-4">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full focus:ring-primary focus:border-primary outline-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transform hover:scale-105 transition-all flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <FaPaperPlane className="animate-spin " />
                  ) : (
                    <FaPaperPlane className="mr-2" />
                  )}
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full bg-gray-200 text-gray-800 py-3 px-8 rounded-lg shadow-lg hover:bg-gray-300 transform hover:scale-105 transition-all"
                >
                  Reset
                </button>
              </div>
            </form>

            {/* Social Media Links */}
            <div className="flex space-x-6 justify-center mt-8">
              <a
                href="#"
                className="text-primary-dark text-2xl hover:text-accent"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="#"
                className="text-primary-dark text-2xl hover:text-accent"
                aria-label="Twitter"
              >
                <FiTwitter />
              </a>
              <a
                href="#"
                className="text-primary-dark text-2xl hover:text-accent"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
            </div>
          </motion.div>
        </div>
        {/* Interactive Map Section */}
        <div className="mt-24 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent">
                Find Us on the Map
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at our office in Lahore, Pakistan. We’re here to help you
              bring your ideas to life!
            </p>
          </motion.div>

          {/* Map Container */}
          <motion.div
            className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10"></div>

            {/* Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.674715060093!2d74.35227231510494!3d31.467081981391636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919067a89b18b4d%3A0x4c2c9a9a1a1a1a1a!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1622549402997!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="absolute inset-0"
            ></iframe>

            {/* Custom Marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
                <div className="mt-2 bg-white px-4 py-2 rounded-lg shadow-md text-sm font-medium text-gray-800">
                  Lahore, Pakistan
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
