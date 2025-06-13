import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import Logo from "../assets/logo.svg";

function Navbar() {
  return (
    <motion.nav
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
      className="w-full flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-10 lg:px-32 py-4 gap-4"
    >
      {/* Logo */}
      <a
        href="https://pranav-portfolio-bqzp.onrender.com/"
        className="flex-shrink-0"
      >
        <img src={Logo} className="w-10 h-10" alt="logo" />
      </a>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center items-center gap-4 ml-auto">
        <a
          href="https://www.linkedin.com/in/pranav-parulekar-75b386242"
          target="_blank"
        >
          <FaLinkedinIn
            size={22}
            className="hover:text-white transition-all duration-300"
          />
        </a>
        <a href="https://github.com/PranavParulekar-12" target="_blank">
          <FaGithub
            size={22}
            className="hover:text-white transition-all duration-300"
          />
        </a>
        <a
          href="https://www.instagram.com/pranav_parulekar_12/"
          target="_blank"
        >
          <FaInstagram
            size={22}
            className="hover:text-white transition-all duration-300"
          />
        </a>
        <a href="https://x.com/PranavParuleka3" target="_blank">
          <FaXTwitter
            size={22}
            className="hover:text-white transition-all duration-300"
          />
        </a>
        <a href="https://leetcode.com/u/PranavParulekar12/" target="_blank">
          <SiLeetcode
            size={22}
            className="hover:text-white transition-all duration-300"
          />
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
