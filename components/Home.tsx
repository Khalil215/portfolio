import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I am Khalil",
      "A Web Developer",
      "<Who Loves What He Does/>",
      "<En Route to Becoming World Class/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      className="h-screen grid md:flex content-center md:place-items-center text-gray-200 gap-4 w-[90%] md:w-[80%] md:justify-around mx-auto"
      initial={{opacity:0,}}
      animate={{ opacity:1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="relative w-64 h-64 justify-self-center md:w-96 md:h-96 mb-5">
        <Image
          fill
          src="/me.jpg"
          alt="my picture"
          objectFit="cover"
          className="rounded-tl-3xl rounded-br-3xl"
        />
      </div>
      <div className="md:order-first">
        <div className="text-3xl ">
          {text}
          <Cursor cursorColor="white" />
        </div>
        <div className="uppercase text-gray-500 tracking-[12px] mt-3 md:order-last">
          Frontend Developer
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
