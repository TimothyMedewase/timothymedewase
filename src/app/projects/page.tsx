"use client";
import React from "react";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <main className=" mt-5 px-12">
          <div className="mt-5 mb-5 font-sans font-bold text-5xl border-2 max-w-fit mx-auto">
            Projects
          </div>
        </main>
      </motion.div>
    </div>
  );
};

export default Projects;
