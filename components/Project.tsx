import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../sanity";

type Props = {
  project: any;
};

function Project({ project }: Props) {
  const src1 = urlFor(project?.projectImage).url();

  return (
    <div className="opacity-60 transition-opacity duration-200 mt-4 hover:opacity-100 h-[75vh]">
      <motion.div
        className="w-[380px] md:w-[450px] space-y-2 lg:w-[550px] bg-gray-800 h-full rounded-lg p-3 bg grid "
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <div className="relative w-full h-48 md:h-[40vh]">
          <Image
            loader={() => src1}
            fill
            src={src1}
            alt={project.title}
            objectFit="contain"
          />
        </div>
        <div className="text-gray-200 font-semibold text-2xl">
          {project.title}
        </div>
        <div className="flex justify-center gap-3">
          {project.technologies.map((tech: any) => {
            const src2 = urlFor(tech.skillImage).url();
            return (
              <div key={tech.title} className="relative w-10 h-10">
                <Image
                loader={() => src2}
                  fill
                  src={src2}
                  alt={tech.title}
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
            );
          })}
        </div>
        <div className="text-sm text-gray-200">
          {project.summary}
        </div>
        <div className="space-x-3">
          <button className="bg-transparent border border-gray-400 p-1 rounded font-semibold text-gray-400 hover:bg-gray-400 hover:text-gray-900 duration-300 hover:animate-pulse tracking-wider">
            <Link href={project.gitUrl} target="_blank">
              GitHub
            </Link>
          </button>
          <button className="bg-transparent border border-gray-400 p-1 rounded font-semibold text-gray-400 hover:bg-gray-400 hover:text-gray-900 duration-300 hover:animate-pulse tracking-wider">
            <Link href={project.liveUrl} target="_blank" >
              Preview
            </Link>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Project;
