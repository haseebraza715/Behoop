import React, { useState, useEffect } from "react";
import { FiChevronDown, FiX, FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect to shrink the header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
      if (!e.target.closest(".mobile-dropdown")) {
        setIsMobileDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled ? "h-16 bg-white/95 shadow-md" : "h-20 bg-white"
      } sticky top-0 z-50 backdrop-blur-md transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <svg
              className="w-8 h-8 text-teal-600"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 0C14.327 0 0 14.327 0 32C0 49.673 14.327 64 32 64C49.673 64 64 49.673 64 32C64 14.327 49.673 0 32 0ZM32 56C18.745 56 8 45.255 8 32C8 18.745 18.745 8 32 8C45.255 8 56 18.745 56 32C56 45.255 45.255 56 32 56Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-2xl font-bold text-teal-600">Behoop</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-teal-600 transition-all font-medium"
            >
              Home
            </a>
            <div className="relative dropdown">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-700 hover:text-teal-600 transition-all font-medium focus:outline-none"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                Services <FiChevronDown className="ml-1" />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    className="absolute left-0 bg-white shadow-lg rounded-lg mt-2 py-4 px-6 space-y-2 w-56 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#web-development"
                      className="block text-gray-600 hover:text-teal-600 transition-all"
                    >
                      Web Development
                    </a>
                    <a
                      href="#uiux-design"
                      className="block text-gray-600 hover:text-teal-600 transition-all"
                    >
                      UI/UX Design
                    </a>
                    <a
                      href="#seo-marketing"
                      className="block text-gray-600 hover:text-teal-600 transition-all"
                    >
                      SEO & Marketing
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-teal-600 transition-all font-medium"
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-teal-600 transition-all font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-teal-600 transition-all font-medium"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="#get-started"
            className="hidden md:block bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 px-6 rounded-full hover:opacity-90 shadow-lg hover:shadow-xl transition-all"
          >
            Get Started
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute top-20 inset-x-0 z-40 py-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="flex flex-col items-start space-y-4 py-4 px-8">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-teal-600 font-medium transition-all"
                >
                  Home
                </a>
                <div className="relative mobile-dropdown">
                  <button
                    onClick={() =>
                      setIsMobileDropdownOpen(!isMobileDropdownOpen)
                    }
                    className="flex items-center text-gray-700 hover:text-teal-600 font-medium transition-all focus:outline-none"
                    aria-expanded={isMobileDropdownOpen}
                    aria-haspopup="true"
                  >
                    Services <FiChevronDown className="ml-1" />
                  </button>
                  {isMobileDropdownOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      <a
                        href="#web-development"
                        className="block text-gray-600 hover:text-teal-600 transition-all"
                      >
                        Web Development
                      </a>
                      <a
                        href="#uiux-design"
                        className="block text-gray-600 hover:text-teal-600 transition-all"
                      >
                        UI/UX Design
                      </a>
                      <a
                        href="#seo-marketing"
                        className="block text-gray-600 hover:text-teal-600 transition-all"
                      >
                        SEO & Marketing
                      </a>
                    </div>
                  )}
                </div>
                <a
                  href="#portfolio"
                  className="text-gray-700 hover:text-teal-600 font-medium transition-all"
                >
                  Portfolio
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-teal-600 font-medium transition-all"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-teal-600 font-medium transition-all"
                >
                  Contact
                </a>
                <a
                  href="#get-started"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 px-6 rounded-full hover:opacity-90 shadow-lg transition-all"
                >
                  Get Started
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
