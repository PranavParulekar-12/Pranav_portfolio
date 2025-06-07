import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
function Navbar() {
  return (
    <motion.nav
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className=" flex flex-wrap justify-center items-center lg:justify-between py-6 mb-16 lg:mb-0"
    >
      <div className="flex flex-shrink-0 items-center">
        <a href="https://">
          <img src="/" className="w-12 h-12 lg:ml-10 " alt="logo" />
        </a>
      </div>
      <div className="m-8 flex  items-center justify-center gap-4 ">
        <a href="https://www.linkedin.com/in/pranav-parulekar-75b386242" target="_blank">
          <FaLinkedinIn
            size={24}
            className=" hover:text-white transition-all duration-300"
          />
        </a>
        <a href="https://github.com/PranavParulekar-12" target="_blank">
          <FaGithub
            size={24}
            className=" hover:text-white transition-all duration-300"
          />
        </a>
        <a href="http://www.instagram.com/" target="_blank">
          <FaInstagram
            size={24}
            className=" hover:text-white transition-all duration-300"
          />
        </a>
        <a href="https://x.com/PranavParuleka3" target="_blank">
          <FaXTwitter
            size={24}
            className=" hover:text-white transition-all duration-300"
          />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebook
            size={24}
            className=" hover:text-white transition-all duration-300"
          />
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
