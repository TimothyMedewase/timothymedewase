"use client";
import React from "react";
import { motion } from "framer-motion";
import Cards from "@/components/Cards";

const About = () => {
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
        <main className="mt-5 px-12">
          <div className="mt-5 mb-20 font-sans font-bold text-5xl max-w-fit mx-auto">
            Timothy Medewase
          </div>
          <div className=" flex flex-col md:flex-row gap-4">
            <Cards />
            <p className=" mt-5 text-left ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </main>
      </motion.div>
    </div>
  );
};

export default About;
