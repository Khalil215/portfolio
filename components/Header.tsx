import { motion } from 'framer-motion'
// import Link from 'next/link'
import React from 'react'


type Props = {}

function Header({}: Props) {
  return (
    <nav className='sticky top-0 p-5 z-10 text-gray-400'>
      <motion.div className='flex justify-center md:justify-end max-w-5xl mx-auto md:gap-9 '
      initial={{y:-200, opacity:0, scale:0.9}}
      animate={{y:0, opacity:1, scale:1 }} transition={{duration:1.5}}>
        
        <a href='#about'><button className='btn'>About</button></a>
        <a href='#skills'><button className='btn'>Skills</button></a>
        <a href='#projects'><button className='btn'>Projects</button></a>
        <a href='#contact'><button className='btn'>Contact</button></a>
      </motion.div>
    </nav>
  )
}

export default Header