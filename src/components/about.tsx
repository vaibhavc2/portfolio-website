"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="w-[20rem] sm:w-auto">
        <div className="mb-8 mt-10 text-xl">
          <u>Crafting Digital Experiences: A Web Developer&apos;s Journey</u>
        </div>
        <p className="text-gray-700 dark:text-white/80">
          Driven by a passion for code and creativity, I am a dedicated web
          developer committed to bringing ideas to life through elegant and
          efficient digital solutions. With expertise in front-end and back-end
          technologies, I thrive on challenges and continuously strive to push
          the boundaries of innovation in web development. I love to lead the
          teams through the challenges and help them to achieve their goals.
        </p>
      </div>
    </motion.section>
  );
}
