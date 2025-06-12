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
      className="flex flex-col lg:flex-row items-center justify-between py-6 px-4 lg:px-32"
    >
      {/* Logo */}
      <div className="mb-4 lg:mb-0">
        <a href="/">
          <img src={Logo} className="w-12 h-12" alt="logo" />
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center items-center gap-4">
        <a
          href="https://www.linkedin.com/in/pranav-parulekar-75b386242"
          target="_blank"
        >
          <FaLinkedinIn
            size={24}
            className="hover:text-white transition-all duration-300"
          />
        </a>
        <a href="https://github.com/PranavParulekar-12" target="_blank">
          <FaGithub
            size={24}
            className="hover:text-white transition-all duration-300"
          />
        </a>
        <a
          href="https://www.instagram.com/pranav_parulekar_12/"
          target="_blank"
        >
          <FaInstagram
            size={24}
            className="hover:text-white transition-all duration-300"
          />
        </a>
        <a href="https://x.com/PranavParuleka3" target="_blank">
          <FaXTwitter
            size={24}
            className="hover:text-white transition-all duration-300"
          />
        </a>
        <a href="https://leetcode.com/u/PranavParulekar12/" target="_blank">
          <SiLeetcode
            size={24}
            className="hover:text-white transition-all duration-300"
          />
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
