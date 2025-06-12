import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import laptopImg from "../assets/Laptop.png";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import ScrambleText from "./ScrambleText";
import { SiLeetcode } from "react-icons/si";

const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="border-b border-neutral-900 py-16">
      <motion.h2
        id="contact"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="my-20 text-center text-4xl 
 cursor-default hover:text-white transition-all duration-300 font-semibold"
      >
        Contact Me
      </motion.h2>
      <div className="text-center tracking-tighter flex flex-wrap gap-20 items-center justify-center w-full">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pb-10"
        >
          <img src={laptopImg} className="h-80 min-h-80" />
        </motion.div>
        <div>
          <div className="mt-8">
            <motion.h6
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-semibold text-neutral-400 text-sm "
            >
              Email
            </motion.h6>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="my-1 text-xl w-64"
            >
              <a
                href="mailto:pranavparulekar12@gmail.com
"
              >
                <ScrambleText
                  text="pranavparulekar12@gmail.com"
                  duration={700}
                  small={true}
                />
              </a>
            </motion.p>
          </div>
          <div className="mt-8">
            <motion.h6
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-semibold text-neutral-400 text-sm"
            >
              Socials
            </motion.h6>
            <motion.div
              whileInView={{ opacity: 1, y: -0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="my-1 text-xl"
            >
              <div className="mt-4 flex  items-center justify-center gap-4 ">
                <a
                  href="https://www.linkedin.com/in/pranav-parulekar-75b386242"
                  target="_blank"
                >
                  <FaLinkedinIn
                    size={30}
                    className=" hover:text-white transition-all duration-300"
                  />
                </a>
                <a href="https://github.com/PranavParulekar-12" target="_blank">
                  <FaGithub
                    size={30}
                    className=" hover:text-white transition-all duration-300"
                  />
                </a>
                <a
                  href="https://www.instagram.com/pranav_parulekar_12/"
                  target="_blank"
                >
                  <FaInstagram
                    size={30}
                    className=" hover:text-white transition-all duration-300"
                  />
                </a>
                <a href="https://x.com/PranavParuleka3" target="_blank">
                  <FaXTwitter
                    size={30}
                    className=" hover:text-white transition-all duration-300"
                  />
                </a>
                <a
                  href="https://leetcode.com/u/PranavParulekar12/"
                  target="_blank"
                >
                  <SiLeetcode
                    size={30}
                    className=" hover:text-white transition-all duration-300"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
