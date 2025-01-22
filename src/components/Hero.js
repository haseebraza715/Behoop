import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroIllustration from "../images/undraw_coding_joxb.svg";

const testimonials = [
  "Behoop transformed our business website—impressive results!",
  "The team’s creativity and professionalism are unmatched.",
  "Working with Behoop was a game-changer for our online presence.",
];

const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  // Rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingParticles = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.2,
      transition: { duration: 2, repeat: Infinity, repeatType: "mirror" },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-primary via-white to-light-teal overflow-hidden">
      {/* Floating Particles */}
      <motion.div
        className="absolute top-1/4 left-10 w-12 h-12 bg-accent rounded-full blur-2xl"
        variants={floatingParticles}
        initial="hidden"
        animate="visible"
      ></motion.div>
      <motion.div
        className="absolute bottom-1/3 right-20 w-16 h-16 bg-primary-dark rounded-full blur-2xl"
        variants={floatingParticles}
        initial="hidden"
        animate="visible"
      ></motion.div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-36 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <motion.div
          className="text-center lg:text-left max-w-2xl space-y-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent">
              Build Your Digital Future
            </span>{" "}
            <br />
            <span className="text-charcoal">with Behoop</span>
          </motion.h1>

          {/* Dynamic Testimonials */}
          <motion.p
            key={currentQuote}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="text-lg italic text-gray-600 leading-relaxed"
          >
            “{testimonials[currentQuote]}”
          </motion.p>

          {/* Call-to-Actions */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a
              href="#get-started"
              className="bg-gradient-to-r from-primary to-primary-dark text-white py-3 px-8 rounded-full shadow-lg hover:opacity-90 hover:shadow-2xl transform hover:scale-105 transition-all flex items-center space-x-2"
            >
              <span>Get Started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <a
              href="#services"
              className="bg-transparent border-2 border-primary-dark text-primary-dark py-3 px-8 rounded-full hover:bg-primary-dark hover:text-white hover:border-primary-dark transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Our Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content: Illustration */}
        <motion.div
          variants={scaleUp}
          className="mt-16 lg:mt-0 lg:ml-12 flex-shrink-0"
        >
          <img
            src={HeroIllustration}
            alt="Illustration of a developer coding on a laptop"
            className="w-full max-w-lg rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
