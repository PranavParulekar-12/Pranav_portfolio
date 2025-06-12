import React, { useEffect, useRef } from "react";
import memojipic from "../assets/memoji.png";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { FaGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const container = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  },
});

function Hero({ handleContactPress }) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Software Developer",
        "MERN Stack Web Developer",
        "Python Developer",
        "App Developer",
        "Frontend Developer",
        "Full Stack Developer",
        "UI/UX Designer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="border-b border-neutral-800 pb-16 pt-10">
      <div className="flex flex-col lg:flex-row  items-center justify-between gap-12">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-8">
          <motion.h1
            variants={container(0.3)}
            initial="hidden"
            animate="visible"
            className="text-6xl sm:text-6xl lg:text-6xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-slate-400 cursor-default"
          >
            Hello, I am <br />
            Pranav Parulekar
          </motion.h1>

          <motion.p
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            className="mt-4 text-xl sm:text-2xl bg-gradient-to-r from-purple-300 via-slate-400 to-blue-500 bg-clip-text text-transparent tracking-tight"
          >
            <span ref={el} />
          </motion.p>

          <motion.p
            variants={container(0.8)}
            initial="hidden"
            animate="visible"
            className="mt-6 text-base sm:text-lg text-neutral-400 leading-relaxed"
          >
            I am a <strong className="text-white">Tech Enthusiast</strong> and a{" "}
            <strong className="text-white">
              Passionate Software Developer
            </strong>{" "}
            from Kolhapur, India. Currently pursuing my final year of B.Tech in{" "}
            <strong className="text-white">
              Computer Science (Data Science)
            </strong>
            , I thrive on innovation and love solving real-world problems with
            technology.
          </motion.p>

          {/* Buttons */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 items-center justify-center lg:justify-start"
          >
            <a
              href="https://github.com/PranavParulekar-12"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-neutral-300 px-5 py-2 rounded-full flex items-center gap-2 font-medium text-sm hover:bg-white hover:text-black transition-all"
            >
              <FaGithub /> GitHub
            </a>
            <button
              onClick={handleContactPress}
              className="border-2 border-neutral-300 px-5 py-2 rounded-full flex items-center gap-2 font-medium text-sm hover:bg-white hover:text-black transition-all"
            >
              <MdAlternateEmail /> Contact Me
            </button>
          </motion.div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center px-4">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            src={memojipic}
            alt="Memoji"
            className="w-64 sm:w-72 lg:w-96 h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
