import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { urlFor } from "../sanity";

type Props = {
  mInfo: any;
  social: any;
};

function About({ mInfo, social }: Props) {
  const src = urlFor(mInfo?.aboutImage).url();
  // console.log(social);

  return (
    <div className="relative flex flex-col gap-5 md:flex-row items-center justify-center h-screen text-center text-sm md:text-left w-[90%] md:w-[80%] mx-auto">
      <h2 className="head">About</h2>
      <div className="mt-32 md:mt-10 ">
        <motion.div
          className="relative w-[215px] h-[215px]  justify-self-center md:w-[400px] md:h-[250px] mb-5 "
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          {mInfo.aboutImage && (
            <Image
              loader={() => src}
              fill
              src={src}
              alt="my picture"
              objectFit="cover"
              objectPosition="left"
              className="rounded-full md:rounded"
            />
          )}
        </motion.div>
        <motion.div
          className="flex justify-center gap-4"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          {social.map((s:any) => (
            <SocialIcon key={s.title} target="_blank" className="hover:animate-bounce" url={s.url} />
          ))}
        </motion.div>
      </div>

      <div className="md:w-1/2">
        <div className="text-gray-200 md:w-3/4 tracking-wide">{mInfo?.about}</div>
        <button className="mt-5 bg-transparent border border-gray-400 p-2 rounded font-semibold text-gray-400 hover:bg-gray-400 hover:text-gray-900 duration-300 hover:animate-pulse tracking-wider">
          <a href="https://drive.google.com/file/d/1xFU6VI1tK5QPJpJNPnjMCbES8RsBqtQK/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
          Resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default About;
