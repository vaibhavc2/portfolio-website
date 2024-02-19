"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { dynamicStrings, personalData } from "@/lib/data";
import { useSectionInView, useTypingEffect } from "@/lib/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import BlurImage from "./blur-image";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const spanRef = useRef<HTMLSpanElement>(null);

  useTypingEffect(spanRef, dynamicStrings, 100);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <div className="mb-24 mt-12 flex scale-150 items-center justify-center sm:scale-[180%]">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            className=""
          >
            <BlurImage
              src={personalData.avatarUrl}
              alt="Vaibhav Chopra: Full-stack Web Developer"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 w-[275px] text-2xl font-medium sm:w-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* <span className="mb-4 block">
          Hi, I'm <span className="font-semibold">Vaibhav Chopra</span>
        </span>
        <span className="mb-4 block"></span>
        <span className="mb-4 block">
          Passionate about creating web experiences
        </span>
        <span className="mb-4 block">
          Currently looking for new opportunities
        </span>
        <span className="mb-4 block">Let's work together!</span> */}

        <div className="text-lg">
          <div>
            <span className="hidden sm:inline">
              {personalData.greeting.panjabi}{" "}
            </span>
            <span>{personalData.greeting.english}</span>
          </div>
          <div>
            <span>
              I'm{" "}
              <b>
                {personalData.name.english}
                <span className="hidden sm:inline">
                  {" ("}
                  {personalData.name.panjabi}
                  {")"}
                </span>
              </b>{" "}
              from Panjab, India.
            </span>
          </div>
        </div>

        <div className="my-10 text-[1.5rem] md:w-[50rem] md:text-4xl">
          <span>I </span>
          <span ref={spanRef}></span>
        </div>

        <div>
          <span className="text-lg sm:text-xl">Let's work together!</span>
        </div>
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex flex-wrap items-center gap-2 rounded-full bg-gray-900 px-7 py-4 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
          href={personalData.cvUrl}
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>

        <div className="flex gap-3">
          <a
            className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            href={personalData.linkedin}
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            href={personalData.github}
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
