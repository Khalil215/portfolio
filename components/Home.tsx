import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";

type Props = {
  mInfo: any;
};

function Hero({ mInfo }: Props) {
  // console.log(mInfo);

  const src = urlFor(mInfo?.homeImage).url();

  const [text] = useTypewriter({
    words: [
      `Hi, I am ${mInfo?.name}`,
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="relative w-64 h-64 justify-self-center md:w-96 md:h-96 mb-5">
        {mInfo.homeImage && (
          <Image
            loader={() => src}
            fill
            objectFit="cover"
            src={src}
            alt="my picture"
            className="rounded-tl-3xl rounded-br-3xl"
          />
        )}
      </div>
      <div className="md:order-first">
        <div className="text-3xl ">
          {text}
          <Cursor cursorColor="white" />
        </div>
        <div className="uppercase text-gray-500 tracking-[12px] mt-3 md:order-last">
          {mInfo?.role}
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
