'use client';

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
return (
<section id="home" className="pt-36 pb-24">
    <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
                sequence={[
                'Rawan Ayman', 1500,
                'Web Developer', 1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
            </h1>
            <p className="text-white/70 mt-4 text-lg">
            Junior Front-End Developer with a strong foundation in modern web technologies including React, Next.js, TypeScript, and Tailwind CSS.
            </p>
            <div className="mt-8 flex gap-4">
            <Link href="/#contact"
            className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-br from-purple-600 to-pink-500 hover:scale-105 transition-transform">
                Contact Me
            </Link>
            <Link href="/rawan-ayman-cv.pdf" target="_blank"
            className="p-[2px] rounded-full bg-gradient-to-br from-purple-600 to-pink-500 hover:scale-105 transition-transform">
                <span className="block bg-primary text-white rounded-full px-5 py-2.5 hover:bg-transparent transition-colors duration-300">
                Download CV
                </span>
            </Link>
            </div>
        </motion.div>

          {/* Right Column: Avatar Image */}
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:justify-end"
        >
            <div className="relative overflow-hidden w-80 h-80  rounded-full border-2 border-pink-700 bg-transparent flex items-center justify-center">
            <Image
                src="/images/hero-image.png"
                alt="Developer Avatar"
                width={400}
                height={400}
                className="z-10 translate-y-7 absolute"
            />
            </div>
        </motion.div>
        </div>
    </div>
    </section>
);
};

export default Hero;