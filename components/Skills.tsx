import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";

type Props = {
  skill: any;
};

function Skills({ skill }: Props) {
  // console.log(skill);

  return (
    <>
      <div className="relative flex flex-col gap-5 items-center justify-center w-screen h-screen ">
        <h2 className="head">Skills</h2>
        <div className=" grid grid-cols-4 gap-2 md:gap-4">
          {skill.slice(0, skill.length / 2).map((skill: any) => {
            const src = urlFor(skill?.skillImage).url();
            return (
              <motion.div
              key={skill.title}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="relative w-20 h-20"
              >
                <Image
                  key={skill.title}
                  loader={() => src}
                  fill
                  src={src}
                  alt={skill.title}
                  objectFit="cover"
                  className="rounded-full"
                />
              </motion.div>
            );
          })}
          {skill.slice(skill.length / 2, skill.length).map((skill: any) => {
            const src = urlFor(skill?.skillImage).url();
            return (
              <motion.div
              key={skill.title}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="relative w-20 h-20"
              >
                <Image
                  key={skill.title}
                  loader={() => src}
                  fill
                  src={src}
                  alt={skill.title}
                  objectFit="cover"
                  className="rounded-full"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
