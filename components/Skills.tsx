import React from "react";
import Image from "next/image"
import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="relative flex flex-col gap-5 items-center justify-center h-screen ">
      <h2 className="head">Skills</h2>
      <motion.div className=" grid grid-cols-3 gap-6"
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      >
        <div className="relative w-20 h-20">
        <Image
            fill
            src="/htmll.png"
            alt="html"
            objectFit="cover"
            className="rounded-full md:rounded"
          />
        </div>
        <div className="relative w-20 h-20">
        <Image
            fill
            src="/htmll.png"
            alt="html"
            objectFit="cover"
            className="rounded-full md:rounded"
          />
        </div>
        <div className="relative w-20 h-20">
        <Image
            fill
            src="/htmll.png"
            alt="html"
            objectFit="cover"
            className="rounded-full md:rounded"
          />
        </div>
        <div className="relative w-20 h-20">
        <Image
            fill
            src="/htmll.png"
            alt="html"
            objectFit="cover"
            className="rounded-full md:rounded"
          />
        </div>
        <div className="relative w-20 h-20">
        <Image
            fill
            src="/htmll.png"
            alt="html"
            objectFit="cover"
            className="rounded-full md:rounded"
          />
        </div>
        <div className="relative w-20 h-20">
        <Image
            fill
            src="/styled.png"
            alt="html"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="relative w-20 h-20">
        <Image
            fill
            src="/next.png"
            alt="html"
            objectFit="cover"
            className="rounded-full md:rounded"
          />
        </div>
        <div className="relative w-20 h-20">
        <Image
            fill
            src="/next.png"
            alt="html"
            objectFit="cover"
            className="rounded-full md:rounded"
          />
        </div>
        <div className="relative w-20 h-20">
        <Image
            fill
            src="/sanity.png"
            alt="html"
            objectFit="cover"
            className="rounded-full md:rounded"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
