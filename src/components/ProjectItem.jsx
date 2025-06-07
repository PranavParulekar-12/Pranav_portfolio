import React from "react";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";

function ProjectItem({ link, img, title, description, children, screenshot }) {
  return (
    <a href={link} className="cursor-pointer">
      <div className="mb-8 flex flex-wrap lg:justify-center lg:text-left text-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full lg:w-1/4 flex justify-center items-center lg:mx-10"
        >
          <img
            src={img}
            width={150}
            className={`mb-6 rounded-xl ${screenshot && "w-full lg:w-64"}`}
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <motion.h6
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-2 font-semibold"
          >
            <ScrambleText text={title} duration={(title?.length / 2) * 100} />
          </motion.h6>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4 text-neutral-400"
          >
            {description}
          </motion.p>
          {children}
        </motion.div>
      </div>
    </a>
  );
}

export default ProjectItem;
