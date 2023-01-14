import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {}

function Project({}: Props) {
  return (
    <div className='opacity-60 transition-opacity duration-200 mt-4 hover:opacity-100'>
      <motion.div className="w-[380px] md:w-[450px] space-y-2 lg:w-[550px] bg-gray-800 rounded-lg p-3 bg "
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}>
          <div
            className="relative w-full h-48 md:h-[40vh]"
            
          >
            <Image
              fill
              src="/counter.png"
              alt="my picture"
              objectFit="contain"
              
            />
          </div>
          <div className="text-gray-200 font-semibold text-2xl">
            Counter App
          </div>
          <div className="flex justify-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                fill
                src="/htmll.png"
                alt="my picture"
                objectFit="contain"
                className="rounded"
              />
            </div>
          </div>
          <div className="text-sm text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            architecto est aperiam explicabo repudiandae ex suscipit veniam esse
            quisquam quis voluptatibus quas ab tempora voluptates praesentium
            nostrum, debitis earum? Quos.
          </div>
          <div className="space-x-3">
          <button className="bg-transparent border border-gray-400 p-1 rounded font-semibold text-gray-400 hover:bg-gray-400 hover:text-gray-900 duration-300 hover:animate-pulse"><Link href="/Khalil's-CV.pdf" download>GitHub</Link></button>
          <button className="bg-transparent border border-gray-400 p-1 rounded font-semibold text-gray-400 hover:bg-gray-400 hover:text-gray-900 duration-300 hover:animate-pulse"><Link href="/Khalil's-CV.pdf" download>Preview</Link></button>
          </div>
        </motion.div>      
    </div>
  )
}

export default Project