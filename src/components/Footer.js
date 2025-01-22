import React, { useState } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show/hide "Back-to-Top" button based on scroll position
  const toggleBackToTop = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener
  React.useEffect(() => {
    window.addEventListener("scroll", toggleBackToTop);
    return () => window.removeEventListener("scroll", toggleBackToTop);
  }, []);

  return (
    <footer className="bg-gradient-to-br from-primary-light via-white to-light-teal py-16 mt-24 border-t border-gray-200 relative">
      {/* Back-to-Top Button */}
      {showBackToTop && (
        <motion.button
          className="fixed bottom-8 right-8 bg-primary-dark text-white p-4 rounded-full shadow-lg hover:bg-primary transition-all"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900">Behoop</h3>
            <p className="text-gray-600">
              Empowering innovation through cutting-edge technology and
              user-centric design.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
                { icon: <FaTwitter />, label: "Twitter", href: "#" },
                { icon: <FaInstagram />, label: "Instagram", href: "#" },
                { icon: <FaGithub />, label: "GitHub", href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="text-2xl">{social.icon}</div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#" },
                { label: "Services", href: "#" },
                { label: "Contact", href: "#" },
                { label: "Privacy Policy", href: "#" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Extra Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-gray-900">Resources</h3>
            <ul className="space-y-3">
              {[
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "FAQs", href: "#" },
                { label: "Support", href: "#" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-900">Contact Info</h3>
            <ul className="space-y-3 text-gray-600">
              <motion.li
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="mailto:support@deepseek.com"
                  className="hover:text-primary transition-colors"
                >
                  support@deepseek.com
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                123 Innovation Drive, Tech City, USA
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-200 my-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        ></motion.div>

        {/* Copyright Notice */}
        <motion.div
          className="text-center text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            &copy; {new Date().getFullYear()} DeepSeek. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
