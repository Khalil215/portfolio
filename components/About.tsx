import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";


type Props = {};

function About({}: Props) {
  return (
    <div className="relative flex flex-col gap-5 md:flex-row items-center justify-center h-screen text-center md:text-left w-[90%] md:w-[80%] mx-auto">
      <h2 className="head">About</h2>
      <div className="mt-10 ">
        <motion.div
          className="relative w-56 h-56 justify-self-center md:w-[400px] md:h-[250px] mb-5 "
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
          <SocialIcon url="https://www.youtube.com" />
          <SocialIcon  url="https://api.whatsapp.com/send?phone=+2347060572712" />
          <SocialIcon network="email" />
          <SocialIcon network="email" />
        </motion.div>
      </div>

      <div className="md:w-1/2">
        <div className="text-gray-200 md:w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          repudiandae porro, nobis, amet voluptates placeat in incidunt sint hic
          dolorum tempore laborum. Nam neque enim labore praesentium dicta vitae
          sequi.
        </div>
        <button className="mt-5 bg-transparent border border-gray-400 p-2 rounded font-semibold text-gray-400 hover:bg-gray-400 hover:text-gray-900 duration-300 hover:animate-pulse"><a href="/Khalil's-CV.pdf" download>Download Resume</a></button>
      </div>
    </div>
  );
}

export default About;
