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
          <main className="flex flex-col flex-1 items-center justify-center">
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
                          animate={{opacity: hovered ? 0 : 1}}
                          transition={{duration: 1, ease: "easeInOut"}}
                          className="absolute inset-0 w-full h-full object-contain select-none"
                      />

                      {/* Character */}
                      <motion.img
                          src={character}
                          alt="Site character"
                          draggable="false"
                          initial={false}
                          animate={{opacity: hovered ? 1 : 0}}
                          transition={{duration: 1, ease: "easeInOut"}}
                          className="absolute inset-0 w-full h-full object-contain select-none"
                      />
                  </motion.div>
              </div>

              {/* Tagline */}
              <p
                  className="mt-16 md:mt-24 lg:mt-28 text-center text-xl leading-[2.1rem] text-gray-700 max-w-2xl"
                  style={{fontFamily: "Geist Mono, serif", fontSize: "larger", paddingLeft: "5%", paddingRight: "5%"}}
              >
                  <h1 className="leading-[4rem]" style={{color: "#ffd4a4", fontFamily: "Geist Mono, serif", fontSize: "xxx-large"}}>
                      Hi! My name is <br/>
                      DMITRII KOLOSOV
                  </h1>

                  <h2 style={{fontFamily: "Geist Mono, serif", fontSize: "xx-large"}}>
                      Software Developer & Data Engineer
                  </h2><br/><br/>
                  🚧 <b>Under Construction – Deploying Soon</b> 🚧<br/><br/>
                  This site is currently in dev mode — a personal tech space in the making. <br/>
                  Soon, it’ll be home to insights on data, code, and the real-life side of IT. <br/>
                  <br/>
                  I’m building it from scratch: hand-coded, self-hosted, and powered by caffeine and curiosity. <br/>
                  <br/>
                  Thanks for dropping by. Come back soon!
                  <br/><br/><br/>
              </p>
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