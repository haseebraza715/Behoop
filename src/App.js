import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Behoop - Build Your Digital Presence</title>
        <meta
          name="description"
          content="Behoop specializes in creating stunning, high-performance websites that empower businesses online."
        />
        <meta
          name="keywords"
          content="Web Development, UI/UX Design, SEO, Digital Solutions"
        />
        <meta name="author" content="Behoop" />
        <meta
          property="og:title"
          content="Behoop - Build Your Digital Presence"
        />
        <meta
          property="og:description"
          content="Behoop specializes in creating stunning, high-performance websites that empower businesses online."
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Behoop - Build Your Digital Presence"
        />
        <meta
          name="twitter:description"
          content="Behoop specializes in creating stunning, high-performance websites that empower businesses online."
        />
      </Helmet>

      {/* Main App Content */}
      <div className="font-sans">
        {/* Header */}
        <Header />

        {/* Lazy-Loaded Components with Suspense Fallback */}
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary-dark"></div>
            </div>
          }
        >
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </Suspense>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
