import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

function About({}: Props) {
  return (
    <div className="relative flex flex-col gap-5 md:flex-row items-center justify-center h-screen text-center md:text-left w-[90%] mx-auto">
      <h2 className="head">About</h2>
      <div>
        <motion.div
          className="relative w-56 h-56 justify-self-center md:w-80 md:h-80 mb-5"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <Image
            fill
            src="/me2.jpg"
            alt="my picture"
            objectFit="cover"
            className="rounded-full md:rounded"
          />
        </motion.div>
        <motion.div className="flex justify-center gap-2"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        >
          <SocialIcon className="" url="https://www.youtube.com" />
          <SocialIcon className="" url="https://www.youtube.com" />
          <SocialIcon network="email" />
          <SocialIcon network="email" />
        </motion.div>
      </div>

      <div className="text-gray-200 md:w-1/2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        repudiandae porro, nobis, amet voluptates placeat in incidunt sint hic
        dolorum tempore laborum. Nam neque enim labore praesentium dicta vitae
        sequi.
      </div>
    </div>
  );
}

export default About;
