import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// External SVG assets
import logo from "./assets/logo.svg";
import character from "./assets/character.svg";

const App = () => {
  const [hovered, setHovered] = useState(false);
  const [svgSize, setSvgSize] = useState(() =>
    typeof window !== "undefined" && window.innerWidth >= 1400 ? "25vw" : "40vw"
  );

  // Update SVG size on viewport resize
  useEffect(() => {
    const handleResize = () => {
      setSvgSize(window.innerWidth >= 1400 ? "25vw" : "40vw");
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const year = new Date().getFullYear();

  return (
      <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-white px-4">
          {/* Main content */}
          <main className="min-h-screen w-screen flex flex-col flex-1 items-center justify-center">
              <br/><br/><br/>
              {/* SVG block */}
              <div
                  className="flex items-center justify-center relative"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  style={{width: svgSize, height: svgSize}}
              >
                  {/* Rotation container */}
                  <motion.div
                      initial={{rotate: 0}}
                      animate={{rotate: hovered ? 360 : -360}}
                      transition={{duration: 1, ease: "easeInOut"}}
                      className="w-full h-full"
                  >
                      {/* Logo */}
                      <motion.img
                          src={logo}
                          alt="Site logo"
                          draggable="false"
                          initial={false}
                          animate={{opacity: hovered ? 1 : 0}}
                          transition={{duration: 1, ease: "easeInOut"}}
                          className="absolute inset-0 w-full h-full object-contain select-none"
                      />

                      {/* Character */}
                      <motion.img
                          src={character}
                          alt="Site character"
                          draggable="false"
                          initial={false}
                          animate={{opacity: hovered ? 0 : 1}}
                          transition={{duration: 1, ease: "easeInOut"}}
                          className="absolute inset-0 w-full h-full object-contain select-none"
                      />
                  </motion.div>
              </div>

              {/* Tagline */}
              <section
                  className="intro mt-16 md:mt-24 lg:mt-28 text-center text-xl leading-[2.1rem] text-gray-700 max-w-2xl"
                  style={{fontFamily: "Geist Mono, serif", fontSize: "larger", paddingLeft: "10%", paddingRight: "10%"}}
              >
                  <h1 className="leading-[4rem]"
                      style={{color: "#ffd4a4", fontFamily: "Geist Mono, serif", fontSize: "xxx-large"}}>
                      Hi! My name is <br/>
                      DMITRII KOLOSOV
                  </h1>

                  <h2 style={{fontFamily: "Geist Mono, serif", fontSize: "xx-large"}}>
                      Software Developer & Data Engineer
                  </h2><br/>
                  🚧 <b>Under Construction – Deploying Soon</b> 🚧<br/><br/>
                  <p>
                      I’m a Software Engineer specializing in <br/>
                      <b>Data Engineering</b>,
                      <b> Backend development</b> and <b>AI-powered, data intensive systems</b>.
                  </p>
                  <p>
                      I bring over <em>9 years</em> of hands-on experience collaborating with <br/>
                      <em>international teams</em> to deliver reliable, scalable solutions.<br/>
                  </p>
                  <br/>
                  <p>
                      Interested in working together or have questions? <br/>
                      <a href="https://linkedin.com/in/pixl4tech" target="_blank" rel="noopener">
                          Connect with me on LinkedIn 👋
                      </a>
                  </p>
                  <br/><br/>
              </section>
          </main>

          {/* Footer */}
          <footer className="py-6 text-center text-sm text-gray-500 select-none"
                  style={{fontFamily: "Geist Mono, serif"}}
          >
              © {year} All rights reserved.
          </footer>
      </div>
  );
};

export default App;