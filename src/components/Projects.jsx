import React from "react";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa6";
import {
  SiDjango,
  SiJavascript,
  SiPython,
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiCloudinary,
  SiAndroid,
  SiKotlin,
  SiHtml5,
  SiCss3,
  SiOpencv,
  SiGithubactions,
  SiExpo,
  SiFlutter,
  SiDart,
  SiSupabase,
  SiTwilio,
  SiIos,
} from "react-icons/si";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";
import TechItem from "./TechItem";
import SwasthaPath from "../assets/SwasthaPath.png";
import WorkoutApp from "../assets/Workout.jpg";

function Projects() {
  return (
    <div className="border-b border-neutral-900 py-16">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="my-20 text-center text-4xl 
 cursor-default hover:text-white transition-all duration-300 font-semibold"
      >
        Projects
      </motion.h2>
      <ProjectItem
        link={"https://github.com/PranavParulekar-12/SwasthPath"}
        title={"SwasthaPath"}
        description={
          "SwasthaPath is a Health Data & Information Management System which helps different levels of admins(from village to state) to analyze health and schemes data."
        }
        img={SwasthaPath}
      >
        <TechItem>
          <>
            <SiFlutter />
            Flutter
          </>
          <>
            <SiDart />
            Dart
          </>
          <>
            <SiPython />
            Python
          </>
          <>
            <SiSupabase />
            Supabase
          </>
          <>
            <SiTwilio />
            Twilio
          </>
          <>
            <SiAndroid />
            Android
          </>
          <>
            <SiIos />
            Ios
          </>
        </TechItem>
      </ProjectItem>
      <ProjectItem
        link={""}
        title={"Workout App"}
        description={
          "A Workout App that allows users to track their workouts, set goals, and monitor their progress and earn badges over time."
        }
        img={WorkoutApp}
      >
        <TechItem>
          <>
            <SiReact />
            React Native
          </>
          <>
            <SiExpo />
            Expo
          </>
          <>
            <SiTailwindcss />
            Tailwind CSS
          </>
          <>
            <SiMongodb />
            MongoDB
          </>
          <>
            <SiNodedotjs />
            Node.js
          </>
        </TechItem>
      </ProjectItem>
      <ProjectItem
        link={
          "https://github.com/PranavParulekar-12/Hand_gesture_mouse_control"
        }
        title={"Hand Gesture Mouse Control"}
        description={
          "A Python project that uses OpenCV and MediaPipe to control the mouse cursor using hand gestures, allowing users to perform actions like clicking and scrolling."
        }
        img={""}
      >
        <TechItem>
          <>
            <SiPython />
            Python
          </>
          <>
            <SiOpencv />
            OpenCV
          </>
        </TechItem>
      </ProjectItem>
    </div>
  );
}

export default Projects;
