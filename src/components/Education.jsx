import React from "react";
import { motion } from "framer-motion";
function Education() {
  return (
    <div className="border-b border-neutral-900 py-16">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="my-20 text-center text-4xl 
     cursor-default hover:text-white transition-all duration-300 font-semibold"
      >
        Education
      </motion.h2>

      <div className="mb-8 flex flex-wrap justify-center lg:gap-48 gap-20">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className=" max-w-xl"
        >
          <motion.h5
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-bold text-xl text-slate-500"
          >
            Dr. A.P.J. Abdul Kalam Technical University
          </motion.h5>
          <motion.h6
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-2 font-semibold"
          >
            B.Tech in Computer Science & Engineering
          </motion.h6>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4 text-neutral-400"
          >
            Inderprastha Engineering College, Ghaziabad <br />
            2025
          </motion.p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className=" max-w-xl"
        >
          <motion.h5
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-bold text-xl text-slate-500"
          >
            Central Board of Secondary Education
          </motion.h5>
          <motion.h6
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-2 font-semibold"
          >
            10+2 PCMB
          </motion.h6>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4 text-neutral-400"
          >
            Rajkiya Pratibha Vikas Vidyalaya, Yamuna Vihar, Delhi <br />
            2020
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
