module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      colors: {
        primary: "#5C8D89",
        "primary-dark": "#4A736C",
        secondary: "#F3F4F6",
        charcoal: "#2D2D2D",
        highlight: "#FED7C3",
        accent: "#6C63FF", 
        "light-teal": "#D4EDEB", 
        "teal-hover": "#4E7D76",
      },
      fontFamily: {
        sans: ["Montserrat", "Open Sans", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      spacing: {
        128: "32rem", 
        144: "36rem", 
      },
      borderRadius: {
        xl: "1.25rem", 
        "2xl": "1.5rem",
      },
      boxShadow: {
        "soft-md": "0 4px 6px rgba(0, 0, 0, 0.05)", 
        "soft-lg": "0 10px 15px rgba(0, 0, 0, 0.05)",
        "glow-primary": "0 0 15px rgba(92, 141, 137, 0.5)", 
      },
      backgroundImage: {
        "gradient-to-br-primary":
          "linear-gradient(to bottom right, #5C8D89, #F3F4F6)", 
        "gradient-to-r-accent": "linear-gradient(to right, #6C63FF, #FED7C3)", 
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        bounceSlow: "bounce 2s infinite",
        slideIn: "slideIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"), 
    require("@tailwindcss/aspect-ratio"), 
  ],
};
