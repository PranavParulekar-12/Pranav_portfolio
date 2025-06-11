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

      <div className="mb-8 flex flex-wrap justify-center gap-10 lg:gap-16 xl:gap-24">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[350px]"
        >
          <motion.h5
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-bold text-xl text-slate-500"
          >
            Dr. D. Y. Patil Pratishthan's College of Engineering Salokhenagar,
            Kolhapur
          </motion.h5>
          <motion.h6
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-2 font-semibold"
          >
            B.Tech in Computer Science & Engineering(Data Science)
          </motion.h6>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4 text-neutral-400"
          >
            Shivaji University,Kolhapur
            <br />
            2026
          </motion.p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[350px]"
        >
          <motion.h5
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-bold text-xl text-slate-500"
          >
            Main Rajaram Jr. College, Kolhapur
          </motion.h5>
          <motion.h6
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-2 font-semibold"
          >
            Class XII
          </motion.h6>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4 text-neutral-400"
          >
            Maharashtra State Board <br />
            2022
          </motion.p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[350px]"
        >
          <motion.h5
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-bold text-xl text-slate-500"
          >
            Gargoti HighSchool , Gargoti
          </motion.h5>
          <motion.h6
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-2 font-semibold"
          >
            Class X
          </motion.h6>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4 text-neutral-400"
          >
            Maharashtra State Board <br />
            2020
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
