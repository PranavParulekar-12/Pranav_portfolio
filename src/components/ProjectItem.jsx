import React from "react";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";

function ProjectItem({ link, img, title, description, children, screenshot }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
      <div className="mb-8 flex flex-wrap lg:justify-center lg:text-left text-center">
        {/* Image (slides in from left) */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/4 flex justify-center items-center lg:mx-10"
        >
          <img
            src={img}
            width={150}
            className={`mb-6 rounded-xl ${screenshot && "w-full lg:w-64"}`}
            alt={title}
          />
        </motion.div>

        {/* Text (slides in from right) */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full max-w-xl lg:w-3/4 group relative"
        >
          <motion.h6
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-2 font-semibold"
          >
            <ScrambleText text={title} duration={(title?.length / 2) * 100} />
          </motion.h6>

          {/* Description area with blur and "Explore Project" overlay */}
          <div className="relative mb-4">
            <p className="text-neutral-400 group-hover:blur-sm transition duration-300">
              {description}
            </p>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-neutral-400 font-semibold text-sm ">
                Explore Project →
              </span>
            </div>
          </div>

          {/* Tech stack */}
          {children}
        </motion.div>
      </div>
    </a>
  );
}

export default ProjectItem;
